import express from "express";
import { v4 as uuidv4 } from "uuid";
//   getProductByCategory,
//   getProductByPrice,
//   postAddProduct,
//   editProduct,
//   getDeleteProduct,
// getSingleProduct
import {
  getAllProduct,
  postAddProduct,
} from "../controllers/product.controller";
import { protect, adminProtect, sellerProtect } from "../middleware/auth.js";

const productRouter = express.Router();

productRouter.get("/all-product", getAllProduct);
// productRouter.get("/product-by-category", getProductByCategory);
// productRouter.get("/product-by-price", getProductByPrice);

productRouter.post("/add-product", protect, sellerProtect, postAddProduct);
// productRouter.post("/edit-product", postEditProduct);
// productRouter.delete("/delete-product", getDeleteProduct);
// productRouter.get("/single-product", getSingleProduct);

export default productRouter;
