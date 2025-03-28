import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MonthlyRevenue = () => {
  const { palette } = useTheme();

  const { data } = useGetKpisQuery();

  const monthlyRevenue = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue }) => {
        return {
          name: month.substring(0, 3).toUpperCase(),
          revenue: revenue,
        };
      })
    );
  }, [data]);
  return (
    <DashboardBox gridArea="c">
      <BoxHeader
        title="Revenue Month by Month"
        subtitle="Graph representing the revenue month by month"
        sideText="+4%"
      ></BoxHeader>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={monthlyRevenue}
          margin={{
            top: 17,
            right: 15,
            left: -5,
            bottom: 58,
          }}
        >
          <defs>
            <linearGradient id="revenueColor" x1="0" x2="0" y1="0" y2="1">
              <stop
                offset="5%"
                stopColor={palette.primary[300]}
                stopOpacity="0.8"
              />
              <stop
                offset="95%"
                stopColor={palette.primary[300]}
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            style={{ fontSize: "10px" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            style={{ fontSize: "10px" }}
          />
          <Tooltip />
          <Bar dataKey="revenue" fill="url(#revenueColor)" />
        </BarChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default MonthlyRevenue;
