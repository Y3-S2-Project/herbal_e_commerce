import mongoose, { Schema, SchemaType } from "mongoose";

const PaymentSchema = new Schema({
  paymentId: { type: String, unique: true,  required: true },
  paidDate: { type: Date },
  receivedDate: { type: Date, required: true },
  companyPaid: { type: Number, required: true },
  customerEarned: { type: Number },
  profit: { type: Number },
  currency: { type: String, default: "LKR", required: true },
});

const BinRequestSchema = new Schema(
  {
    requestId: { type: String, unique: true, required: true },
    requestReceivedBy: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    }, //ref name must be the model name
    requestedBy: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    binLocation: { type: String, required: true },
    wasteTypes: [{ type: String, required: true }],
    collectedBy: { type: String },
    confirmedTime: { type: Date },
    confirmedDate: { type: Date },
    payment: { type: PaymentSchema },
  },
  { versionKey: false }
);
BinRequestSchema.index({ createdAt: 1 });
const BinRequest = mongoose.model("BinRequest", BinRequestSchema);
BinRequest.syncIndexes();
export default BinRequest;
