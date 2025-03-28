import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RevenueAndExpenses = () => {
  const { palette } = useTheme();

  const { data } = useGetKpisQuery();

  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3).toUpperCase(),
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [data]);

  return (
    <DashboardBox gridArea="a">
      <BoxHeader
        title="Revenue and Expenses"
        subtitle="Top line represents Revenue, bottom line represents Expenses"
        sideText="+4%"
      ></BoxHeader>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={revenueExpenses}
          margin={{
            top: 15,
            right: 25,
            left: -10,
            bottom: 60,
          }}
        >
          <defs>
            <linearGradient id="revenueColor" x1="0" x2="0" y1="0" y2="1">
              <stop
                offset="5%"
                stopColor={palette.primary[300]}
                stopOpacity="0.5"
              />
              <stop
                offset="95%"
                stopColor={palette.primary[300]}
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient id="expensesColor" x1="0" x2="0" y1="0" y2="1">
              <stop
                offset="5%"
                stopColor={palette.primary[300]}
                stopOpacity="0.5"
              />
              <stop
                offset="95%"
                stopColor={palette.primary[300]}
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
          <YAxis
            tickLine={false}
            style={{ fontSize: "10px" }}
            axisLine={false}
            domain={[8000, 24000]}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            dot={true}
            stroke={palette.primary.main}
            fillOpacity={1}
            fill="url(#revenueColor)"
          />
          <Area
            type="monotone"
            dataKey="expenses"
            dot={true}
            stroke={palette.primary.main}
            fillOpacity={1}
            fill="url(#expensesColor)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default RevenueAndExpenses;
