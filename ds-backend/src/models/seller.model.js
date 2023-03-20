import mongoose, { Schema } from "mongoose";

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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Seller", SellerSchema);
