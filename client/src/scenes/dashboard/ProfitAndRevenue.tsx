import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ProfitAndRevenue = () => {
  const { palette } = useTheme();

  const { data } = useGetKpisQuery();

  const profitRevenue = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3).toUpperCase(),
          revenue: revenue,
          profit: (revenue - expenses).toFixed(2),
        };
      })
    );
  }, [data]);

  return (
    <DashboardBox gridArea="b">
      <BoxHeader
        title="Profit and Revenue"
        subtitle="Top line represents Revenue, bottom line represents Profits"
        sideText="+4%"
      ></BoxHeader>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={profitRevenue}
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
          <Legend height={20} wrapperStyle={{ margin: "0 0 10px 0" }} />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="profit"
            stroke={palette.tertiary[500]}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="revenue"
            stroke={palette.primary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default ProfitAndRevenue;
