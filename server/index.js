import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";

import Transaction from "./models/Transaction.js";
import Product from "./models/Product.js";
import KPI from "./models/KPI.js";
import { kpis, products, transactions } from "./data/data.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL || "mongodb://localhost:27017")
  .then(async () => {
    app.listen(port, () => console.log(`Server Running on PORT: ${port}`));

    /* Seeding data into the database */
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
  })
  .catch((err) => console.log(`${err} cannot connect database`));
