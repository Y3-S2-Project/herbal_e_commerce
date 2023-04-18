import mongoose, { Schema } from "mongoose";
import { type } from "os";

const SellerSchema = new Schema(
  {
    sellerName: { 
      type: String,
      required: true,
    },

    sellerEmail: {
      type: String,
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Seller", SellerSchema);
