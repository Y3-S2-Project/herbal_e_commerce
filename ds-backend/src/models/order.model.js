import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product", // Reference to the product model
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    orderStatus: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);