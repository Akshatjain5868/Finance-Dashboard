import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";
import { Cell, Pie, PieChart } from "recharts";

const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];

const CampaignAndTargets = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];

  return (
    <DashboardBox gridArea="e">
      <BoxHeader title="Campaign and Targets" sideText="+4%"></BoxHeader>
      <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
        <PieChart
          width={110}
          height={100}
          margin={{ top: 0, right: -10, left: 10, bottom: 0 }}
        >
          <Pie
            stroke="none"
            data={pieData}
            innerRadius={18}
            outerRadius={38}
            paddingAngle={2}
            dataKey="value"
          >
            {pieData.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={pieColors[index]} />
            ))}
          </Pie>
        </PieChart>
        <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
          <Typography variant="h5">Target Sales</Typography>
          <Typography
            margin="0.3rem 0"
            variant="h3"
            color={palette.primary[300]}
          >
            83
          </Typography>
          <Typography variant="h6">
            Finance goals of the campaign that are desired
          </Typography>
        </Box>
        <Box flexBasis="40%">
          <Typography variant="h5">Losses in Revenue</Typography>
          <Typography variant="h6">Losses are down 25%</Typography>
          <Typography mt="0.4rem" variant="h5">
            Profit Margins
          </Typography>
          <Typography variant="h6">
            Margins are up by 30% from last month
          </Typography>
        </Box>
      </FlexBetween>
    </DashboardBox>
  );
};

export default CampaignAndTargets;
