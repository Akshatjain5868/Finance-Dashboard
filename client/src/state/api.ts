// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { KpisResponse, ProductsResponse, TransactionsResponse } from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL || "http://localhost:5000",
  }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    getKpis: build.query<Array<KpisResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<ProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<TransactionsResponse>, void>({
      query: () => "transaction/transactions/",
      providesTags: ["Transactions"],
    }),
  }),
});

//eslint-disable-next-line
export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;
