import mongoose, { Schema } from "mongoose";

const binSchema = new Schema(
  {
    location: { type: Object, required: true },
    openingTime: { type: String, required: true },
    closingTime: { type: String, required: true },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bin", binSchema);
