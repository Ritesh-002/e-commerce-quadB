import fs from 'fs/promises';
import path from 'path';

import cloudinary from 'cloudinary';

import asyncHandler from '../middlewares/asyncHandler.middleware.js';
import Product from '../models/product.model.js';
import AppError from '../utils/AppError.js';

export const getAllProducts = asyncHandler(async (_req, res, next) => {
    // Find all the products 
    const products = await Product.find({});

    res.status(200).json({
        success: true,
        message: 'All Products',
        products,
    });
});

export const addNewProduct = asyncHandler(async (req, res, next) => {
    const { name, description, price, category, brand, ratings } = req.body;

    if (!name || !description || !price || !brand || !ratings || !category) {
        return next(new AppError('All fields are required', 400));
    }

    const product = await Product.create({
        name,
        description,
        price,
        category,
        brand,
        ratings
    });

    if (!product) {
        return next(
            new AppError('product could not be created, please try again', 400)
        );
    }

    // Run only if user sends a file
    if (req.file) {
        try {
            const result = await cloudinary.v2.uploader.upload(req.file.path, {
                folder: 'e-commerce', // Save files in a folder named lms
            });

            // If success
            if (result) {
                // Set the public_id and secure_url in array
                product.thumbnail.public_id = result.public_id;
                product.thumbnail.secure_url = result.secure_url;
            }

            // After successful upload remove the file from local storage
            fs.rm(`uploads/${req.file.filename}`);
        } catch (error) {
            // Empty the uploads directory without deleting the uploads directory
            for (const file of await fs.readdir('uploads/')) {
                await fs.unlink(path.join('uploads/', file));
            }

            // Send the error message
            return next(
                new AppError(
                    JSON.stringify(error) || 'File not uploaded, please try again',
                    400
                )
            );
        }
    }

    // Save the changes
    await product.save();

    res.status(201).json({
        success: true,
        message: 'product created successfully',
        product,
    });
});

export const getProductById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
        return next(new AppError('Invalid product id or product not found.', 404));
    }

    res.status(200).json({
        success: true,
        message: 'Product fetched successfully',
        productData: product,
    });
});

export const deleteProductById = asyncHandler(async (req, res, next) => {
    // Extracting id from the request parameters
    const { id } = req.params;

    // Finding the product via the product ID
    const product = await Product.findById(id);

    // If product not find send the message as stated below
    if (!product) {
        return next(new AppError('Product with given id does not exist.', 404));
    }

    // Remove product
    await product.remove();

    // Send the message as response
    res.status(200).json({
        success: true,
        message: 'Product deleted successfully',
        data: product
    });
});

export const updateProductById = asyncHandler(async (req, res, next) => {
    // Extracting the product id from the request params
    const { id } = req.params;

    // Finding the product using the product id
    const product = await Product.findByIdAndUpdate(
        id,
        {
            $set: req.body, // This will only update the fields which are present
        },
        {
            runValidators: true, // This will run the validation checks on the new data
        }
    );

    // If no product found then send the response for the same
    if (!product) {
        return next(new AppError('Invalid product id or product not found.', 400));
    }

    // Sending the response after success
    res.status(200).json({
        success: true,
        message: 'product updated successfully',
    });
});