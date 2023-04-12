import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  itemID: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  saleStatus: {
    type: Boolean,
    default: false,
  },
  discount: {
    type: Number,
    default: 0,
  },
  imageUrl: {
    type: [String],
  },
  visible: {
    type: Boolean,
    default: false,
  },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
