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
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Seller", SellerSchema);
