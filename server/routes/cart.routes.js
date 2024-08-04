import { Router } from "express";
import { isLoggedIn } from "../middlewares/auth.middlewares.js";
import { addItemToCart, deleteItemFromCart, getCartByUserId } from "../controllers/cart.controller.js";

const router = Router();

router.get("/:userId", isLoggedIn, getCartByUserId);
router.post("/:userId/items", isLoggedIn, addItemToCart);
router.delete('/:userId/items/:productId', deleteItemFromCart);

export default router;
