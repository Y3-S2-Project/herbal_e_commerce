import mongoose, { Schema, SchemaType } from "mongoose";

const PaymentSchema = new Schema({
  paymentId: { type: String, required: true },
  paidDate: { type: Date },
  receivedDate: { type: Date },
  companyPaid: { type: Number, required: true },
  customerEarned: { type: Number },
  profit: { type: Number },
  paymentMethod: { type: Schema.Types.ObjectId, ref: "PaymentMethod" },
  currency: { type: String, default: "LKR" },
  note: { type: String },
  status: { type: String, default: "Pending" },
});
const Payment = mongoose.model("Payment", PaymentSchema);

export default Payment;
