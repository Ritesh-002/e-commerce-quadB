import { Router } from "express";
import { isLoggedIn, authorizeRoles } from "../middlewares/auth.middlewares.js";
import { addNewProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from "../controllers/product.controller.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", isLoggedIn, authorizeRoles("ADMIN"), addNewProduct);
router.put("/:id", isLoggedIn, authorizeRoles("ADMIN"), updateProductById);
router.delete("/:id", isLoggedIn, authorizeRoles("ADMIN"), deleteProductById);

export default router;
