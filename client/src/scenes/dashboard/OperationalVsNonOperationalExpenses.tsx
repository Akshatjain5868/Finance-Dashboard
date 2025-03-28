import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const OperationalVsNonOperationalExpenses = () => {
  const { palette } = useTheme();

  const { data } = useGetKpisQuery();

  const OpVsNonOpExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3).toUpperCase(),
            "Operational Expenses": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [data]);

  return (
    <DashboardBox gridArea="d">
      <BoxHeader
        title="Operational Vs Non-Operational Expenses"
        sideText="+4%"
      ></BoxHeader>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={OpVsNonOpExpenses}
          margin={{
            top: 20,
            right: 0,
            left: -10,
            bottom: 55,
          }}
        >
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
          <YAxis
            yAxisId="left"
            tickLine={false}
            style={{ fontSize: "10px" }}
            axisLine={false}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickLine={false}
            style={{ fontSize: "10px" }}
            axisLine={false}
          />
          <Tooltip />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="Non Operational Expenses"
            stroke={palette.tertiary[500]}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="Operational Expenses"
            stroke={palette.primary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default OperationalVsNonOperationalExpenses;
