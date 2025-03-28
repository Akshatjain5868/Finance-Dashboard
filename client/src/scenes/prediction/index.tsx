import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { useGetKpisQuery } from "@/state/api";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import regression, { DataPoint } from "regression";

const Prediction = () => {
  const { palette } = useTheme();

  const [isPrediction, setIsPrediction] = useState(false);

  const { data } = useGetKpisQuery();

  const revenue = useMemo(() => {
    if (!data) return [];
    const monthData = data[0].monthlyData;

    const formatted: Array<DataPoint> = monthData.map(({ revenue }, i) => {
      return [i, revenue];
    });

    const regressionLine = regression.linear(formatted);

    return monthData.map(({ month, revenue }, i) => {
      return {
        name: month.toUpperCase(),
        "Actual Revenue": revenue,
        "Regression Line": regressionLine.points[i][1],
        "Prediction Line": regressionLine.predict(i + 12)[1],
      };
    });
  }, [data]);

  return (
    <DashboardBox height="100%" width="100%" p="1rem" overflow="hidden">
      <FlexBetween m="1rem 2.5rem" gap="1rem">
        <Box>
          <Typography variant="h3">Revenue and Predictions</Typography>
          <Typography variant="h6">
            Charted revenue and predicted revenue based on a simple linear
            regression model.
          </Typography>
        </Box>
        <Button
          onClick={() => setIsPrediction(!isPrediction)}
          sx={{
            color: palette.grey[900],
            bgcolor: palette.grey[700],
            boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.4)",
          }}
        >
          Show Predicted Revenue for Next Year
        </Button>
      </FlexBetween>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={revenue}
          margin={{
            top: 20,
            right: 75,
            left: 20,
            bottom: 80,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }}>
            <Label value="Month" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis
            domain={[13000, 26000]}
            style={{ fontSize: "10px" }}
            axisLine={false}
            tickFormatter={(v) => `₹${v}`}
          >
            <Label
              value="Revenue in INR"
              angle={-90}
              offset={-5}
              position="insideLeft"
            />
          </YAxis>
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="Actual Revenue"
            stroke={palette.primary.main}
            strokeWidth={0}
            dot={{ strokeWidth: 5 }}
          />
          <Line
            type="monotone"
            dataKey="Regression Line"
            stroke="#8884d8"
            dot={false}
          />
          {isPrediction && (
            <Line
              strokeDasharray="5 5"
              dataKey="Prediction Line"
              stroke={palette.secondary[500]}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default Prediction;
