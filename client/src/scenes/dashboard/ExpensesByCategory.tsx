import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { useGetKpisQuery } from "@/state/api";
import { Box, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import { Cell, Pie, PieChart } from "recharts";

const ExpensesByCategory = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[500]];

  const { data } = useGetKpisQuery();

  const expensesByCategory = useMemo(() => {
    if (data) {
      const totalExpenses = data[0].totalExpenses;
      return Object.entries(data[0].expensesByCategory).map(([key, value]) => {
        return [
          {
            name: key,
            value: value,
          },
          {
            name: `${key} of Total`,
            value: totalExpenses - value,
          },
        ];
      });
    }
  }, [data]);

  return (
    <DashboardBox gridArea="i">
      <BoxHeader title="Expense Breakdown by Category" sideText="+4%" />
      <FlexBetween mt="0.5rem" p="0 1rem" gap="0.5rem" textAlign="center">
        {expensesByCategory?.map((pieData, i) => (
          <Box key={`${pieData[0].name}-${i}`}>
            <PieChart width={110} height={75}>
              <Pie
                stroke="none"
                data={pieData}
                innerRadius={15}
                outerRadius={30}
                paddingAngle={2}
                dataKey="value"
              >
                {pieData.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index]} />
                ))}
              </Pie>
            </PieChart>
            <Typography variant="h5">
              {pieData[0].name.toUpperCase()}
            </Typography>
          </Box>
        ))}
      </FlexBetween>
    </DashboardBox>
  );
};

export default ExpensesByCategory;
