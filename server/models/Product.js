import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

loadType(mongoose);

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    price: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
    expense: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { toJSON: { getters: true }, timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
