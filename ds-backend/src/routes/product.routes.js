import express from "express";
import { v4 as uuidv4 } from "uuid";
//   getProductByCategory,
//   getProductByPrice,
//   postAddProduct,
//

// getSingleProduct
import {
  getAllProduct,
  postAddProduct,
  editProduct,
  getDeleteProduct,
  getAllProductOnSale,
  getSingleProduct,
} from "../controllers/product.controller";
import { protect, adminProtect, sellerProtect } from "../middleware/auth.js";

const productRouter = express.Router();

productRouter.get("/all-product", getAllProduct);
// productRouter.get("/product-by-category", getProductByCategory);
// productRouter.get("/product-by-price", getProductByPrice);

productRouter.post("/add-product", protect, sellerProtect, postAddProduct);
productRouter.post("/edit-product/:id", protect, sellerProtect, editProduct);
productRouter.get("/all-product-onsale", getAllProductOnSale);
productRouter.delete(
  "/delete-product/:id",
  protect,
  sellerProtect,
  getDeleteProduct
);
 productRouter.get("/single-product/:id", getSingleProduct);

export default productRouter;
