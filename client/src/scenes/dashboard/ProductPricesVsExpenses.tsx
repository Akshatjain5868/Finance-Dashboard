import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetProductsQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

const ProductPricesVsExpenses = () => {
  const { palette } = useTheme();
  const { data } = useGetProductsQuery();

  const ProductExpense = useMemo(() => {
    return (
      data &&
      data.map(({ _id, price, expense }) => {
        return {
          id: _id,
          price: price,
          expense: expense,
        };
      })
    );
  }, [data]);

  return (
    <DashboardBox gridArea="f">
      <BoxHeader title="Product Prices vs Expenses" sideText="+4%" />
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 25,
            bottom: 40,
            left: -10,
          }}
        >
          <CartesianGrid stroke={palette.grey[800]} />
          <XAxis
            type="number"
            dataKey="price"
            name="price"
            axisLine={false}
            tickLine={false}
            style={{ fontSize: "10px" }}
            tickFormatter={(v) => `₹${v}`}
          />
          <YAxis
            type="number"
            dataKey="expense"
            name="expense"
            axisLine={false}
            tickLine={false}
            style={{ fontSize: "10px" }}
            tickFormatter={(v) => `₹${v}`}
          />
          <ZAxis type="number" range={[20]} />
          <Tooltip formatter={(v) => `₹${v}`} />
          <Scatter
            name="Product Expense Ratio"
            data={ProductExpense}
            fill={palette.tertiary[500]}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default ProductPricesVsExpenses;
