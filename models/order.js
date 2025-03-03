import mongoose, { Document, Schema } from "mongoose";

const itemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
  },
  items: {
    type: [itemSchema],
    required: true,
  },
  status: {
    type: String,
    enum: [
      "Order Placed",
      "Shipping",
      "Out for Delivery",
      "Delivered",
      "Cancelled",
    ],
    default: "Order Placed",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
