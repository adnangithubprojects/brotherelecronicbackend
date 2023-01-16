import express from "express";
import {
  deleteProduct,
  getProduct,
  postProduct,
  updateProduct,
} from "../controllers/productController.js";
import protect from "../middleware/userMiddleware.js";

const product = express.Router();
product.post("/product/post", postProduct);
product.get("/product/get", protect, getProduct);
product.delete("/products", protect, deleteProduct);
product.put("/product/:id", protect, updateProduct);

export default product;
