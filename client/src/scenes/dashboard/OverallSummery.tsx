import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { Box, Typography, useTheme } from "@mui/material";

const OverallSummery = () => {
  const { palette } = useTheme();
  return (
    <DashboardBox gridArea="j">
      <BoxHeader title="Overall Summery and Explanation Data" sideText="+15%" />
      <Box
        height="15px"
        margin="1.25rem 1rem 0.4rem 1rem"
        bgcolor={palette.primary[800]}
        borderRadius="1rem"
      >
        <Box
          height="15px"
          width="40%"
          bgcolor={palette.primary[600]}
          borderRadius="1rem"
        ></Box>
      </Box>
      <Typography margin="0 1rem" variant="h6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab harum velit
        est asperiores optio dolorem magnam saepe doloribus, magni dolor
        exercitationem temporibus? Rerum id sint nobis quisquam rem beatae
        libero!
      </Typography>
    </DashboardBox>
  );
};

export default OverallSummery;
