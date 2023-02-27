import mongoose, { Schema, SchemaType } from "mongoose";
const PickupRequestSchema = new Schema(
  {
    requestNo: { type: String, unique: true, required: true },
    requestReceivedBy: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
    requestedBy: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
    },
    location: { type: Object, required: true },
    size: { type: String, required: true },
    note: { type: String },
    wasteTypes: [{ type: String, required: true }],
    requestStatus: { type: String, required: true, default: "Pending" },
    collectedBy: { type: String },
    collectAt: { type: Date },
    payment: { type: Schema.Types.ObjectId, ref: "Payment" },
  },
  { timestamps: true }
);
var PickupRequest;
if (mongoose.models.PickupRequest) {
  PickupRequest = mongoose.model("PickupRequest");
} else {
  PickupRequest = mongoose.model("PickupRequest", PickupRequestSchema);
}
export default PickupRequest;
