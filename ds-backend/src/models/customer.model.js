import mongoose, { Schema, SchemaType } from "mongoose";

const CustomerSchema = new Schema(
  {
    customerName: { type: String, required: true },
    address: { type: String, required: true },
  },
  { versionKey: false }
);

const Customer = mongoose.model("Customer", CustomerSchema);

export default Customer;
