import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

loadType(mongoose);

const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
  {
    buyer: {
      type: String,
    },
    amount: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { toJSON: { getters: true }, timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
