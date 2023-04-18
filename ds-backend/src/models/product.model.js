import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  pPid: {
    type: String,
    required: true,
    unique: true,
  },
  pName: {
    type: String,
    required: true,
  },
  pDescription: {
    type: String,
    required: true,
  },
  pPrice: {
    type: Number,
    required: true,
  },
  pStatus: {
    type: String,
    default: "Available",
  },
  pOffer: {
    type: Number,
    default: 0,
  },
  pImages: {
    type: [String],
    required: true,
  },
  pQuantity: {
    type: Number,
    default: 0,
    required: true,
  },
  pCategory: {
    type: String,
  },
  pVisible: {
    type: Boolean,
    default: false,
  },
  pWeight: {
    type: Number,
    required: true,
  },
  pSaleStatus: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
