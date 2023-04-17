import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  pPid: {
    type: String,
    required: true,
  },
  pName: {
    type: String,
  },
  pDescription: {
    type: String,
  },
  pPrice: {
    type: Number,
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
  },
  pQuantity: {
    type: Number,
    default: 0,
  },
  pCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  pVisible: {
    type: Boolean,
    default: false,
  },
  pWeight: {
    type: Number,
  },
  pSaleStatus: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
