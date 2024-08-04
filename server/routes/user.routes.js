import { Router } from "express";
import {
    addUserAddressAndPhone,
    getLoggedInUserDetails,
    loginUser,
    logoutUser,
    registerUser,
    updateUser,
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middlewares.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", isLoggedIn, logoutUser);
router.post("/add-details/:userId", isLoggedIn, addUserAddressAndPhone);
router.get("/me", isLoggedIn, getLoggedInUserDetails);
router.put("/update/:id", isLoggedIn, updateUser);

export default router;