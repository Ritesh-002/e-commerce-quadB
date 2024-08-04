import asyncHandler from '../middlewares/asyncHandler.middleware.js';
import AppError from '../utils/AppError.js';
import User from '../models/user.model.js';

const cookieOptions = {
    secure: process.env.NODE_ENV === 'production' ? true : false,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
};

/**
* @REGISTER
* @ROUTE @POST {{URL}}/api/v1/user/register
* @ACCESS Public
*/
export const registerUser = asyncHandler(async (req, res, next) => {
    // Destructuring the necessary data from req object
    const { fullName, email, password } = req.body;

    // Check if the data is there or not, if not throw error message
    if (!fullName || !email || !password) {
        return next(new AppError('All fields are required', 400));
    }

    // Check if the user exists with the provided email
    const userExists = await User.findOne({ email });

    // If user exists send the reponse
    if (userExists) {
        return next(new AppError('Email already exists', 409));
    }

    // Create new user with the given necessary data and save to DB
    const user = await User.create({
        fullName,
        email,
        password,
    });

    // If user not created send message response
    if (!user) {
        return next(
            new AppError('User registration failed, please try again later', 401)
        );
    }

    // Run only if user sends a file

    // Save the user object
    await user.save();

    // Generating a JWT token
    const token = await user.generateJWTToken();

    // Setting the password to undefined so it does not get sent in the response
    user.password = undefined;

    // Setting the token in the cookie with name token along with cookieOptions
    res.cookie('token', token, cookieOptions);

    // If all good send the response to the frontend
    res.status(201).json({
        success: true,
        message: 'User registered successfully',
        user,
    });
});

/**
 * @LOGIN
 * @ROUTE @POST {{URL}}/api/v1/user/login
 * @ACCESS Public
 */
export const loginUser = asyncHandler(async (req, res, next) => {
    // Destructuring the necessary data from req object
    const { email, password } = req.body;

    // Check if the data is there or not, if not throw error message
    if (!email || !password) {
        return next(new AppError('Email and Password are required', 400));
    }

    // Finding the user with the sent email
    const user = await User.findOne({ email }).select('+password');

    // If no user or sent password do not match then send generic response
    if (!(user && (await user.comparePassword(password)))) {
        return next(
            new AppError('Email or Password do not match or user does not exist', 401)
        );
    }

    // Generating a JWT token
    const token = await user.generateJWTToken();

    // Setting the password to undefined so it does not get sent in the response
    user.password = undefined;

    // Setting the token in the cookie with name token along with cookieOptions
    res.cookie('token', token, cookieOptions);

    // If all good send the response to the frontend
    res.status(200).json({
        success: true,
        message: 'User logged in successfully',
        user,
    });
});

/**
 * @LOGOUT
 * @ROUTE @POST {{URL}}/api/v1/user/logout
 * @ACCESS Public
 */
export const logoutUser = asyncHandler(async (_req, res, _next) => {
    // Setting the cookie value to null
    res.cookie('token', null, {
        secure: process.env.NODE_ENV === 'production' ? true : false,
        maxAge: 0,
        httpOnly: true,
    });

    // Sending the response
    res.status(200).json({
        success: true,
        message: 'User logged out successfully',
    });
});

export const addUserAddressAndPhone = async (req, res) => {
    try {
        const { userId } = req.params;
        const { phone, address } = req.body;

        // Validate input
        if (!phone && !address) {
            return res.status(400).json({ message: 'Phone number or address is required' });
        }
        if (!userId) {
            return res.status(400).json({ message: "user id not found" });
        }
        // Find the user
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update phone number and address
        if (phone) {
            user.phone = phone;
        }

        if (address) {
            user.address = {
                ...user.address,
                ...address
            };
        }

        // Save the updated user
        await user.save();

        res.status(200).json({
            success: true,
            message: 'User details updated successfully',
            user,
        });
    } catch (error) {
        console.error('Error updating user details:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * @LOGGED_IN_USER_DETAILS
 * @ROUTE @GET {{URL}}/api/v1/user/me
 * @ACCESS Private(Logged in users only)
 */
export const getLoggedInUserDetails = asyncHandler(async (req, res, _next) => {
    // Finding the user using the id from modified req object
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        message: 'User details',
        user,
    });
});

/**
* @UPDATE_USER
* @ROUTE @POST {{URL}}/api/v1/user/update/:id
* @ACCESS Private (Logged in user only)
*/
export const updateUser = asyncHandler(async (req, res, next) => {
    // Destructuring the necessary data from the req object
    const { fullName } = req.body;
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
        return next(new AppError('Invalid user id or user does not exist'));
    }


    if (fullName) {
        user.fullName = fullName;
    }

    // Save the user object
    await user.save();

    res.status(200).json({
        success: true,
        message: 'User details updated successfully',
    });
});