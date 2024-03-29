import mongoose from "mongoose";
import Customer from "../models/customerModel.js";

const productSchema = mongoose.Schema({
  pName: {
    type: String,
  },
  custName: {
    type: String,
  },
  shopName: {
    type: String,
  },
  netPrice: {
    type: Number,
  },
  instPrice: {
    type: Number,
    // installment Price
  },
  profit: {
    type: Number,
  },
  date: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
