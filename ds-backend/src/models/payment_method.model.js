import mongoose, { Schema } from "mongoose";

/*
 * PaymentMethod Schema is defined to store payment method details
 */

const PaymentMethodSchema = new Schema(
  {
    methodType: { type: String, required: true },
    expirationDate: { type: String, required: true },
    activeStatus: { type: Boolean, default: true, required: true },
    paymentAddress: {
      addressLine1: { type: String },
      addressLine2: { type: String },
      addressLine3: { type: String },
    },
    cardNumber: { type: String, required: true, unique: true },
    cvc: { type: Number, required: true },
    postalCode: { type: Number, required: true },
    totalPayment: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

PaymentMethodSchema.index({ createdAt: 1 });
const PaymentMethod = mongoose.model("PaymentMethod", PaymentMethodSchema);
PaymentMethod.syncIndexes();
export default PaymentMethod;
