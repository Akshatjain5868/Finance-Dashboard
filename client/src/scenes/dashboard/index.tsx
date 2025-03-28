import { Box, useMediaQuery } from "@mui/material";
import RevenueAndExpenses from "./RevenueAndExpenses";
import ProfitAndRevenue from "./ProfitAndRevenue";
import MonthlyRevenue from "./MonthlyRevenue";
import OperationalVsNonOperationalExpenses from "./OperationalVsNonOperationalExpenses";
import CampaignAndTargets from "./CampaignAndTargets";
import ProductPricesVsExpenses from "./ProductPricesVsExpenses";
import ListOfProducts from "./ListOfProducts";
import RecentOrders from "./RecentOrders";
import ExpensesByCategory from "./ExpensesByCategory";
import OverallSummery from "./OverallSummery";

const gridTemplateLargeScreen = `
        "a b c"
        "a b c"
        "a b c"
        "a b f"
        "d e f"
        "d e f"
        "d h i"
        "g h i"
        "g h j"
        "g h j"
`;

const gridTemplateSmallScreen = `
        "a"
        "a"
        "a"
        "a"
        "b"
        "b"
        "b"
        "b"
        "c"
        "c"
        "c"
        "d"
        "d"
        "d"
        "e"
        "e"
        "f"
        "f"
        "g"
        "g"
        "g"
        "h"
        "h"
        "h"
        "h"
        "i"
        "i"
        "j"
        "j"
`;

const Dashboard = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1200px)");

  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreen
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreen,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreen,
            }
      }
    >
      <RevenueAndExpenses />
      <ProfitAndRevenue />
      <MonthlyRevenue />
      <OperationalVsNonOperationalExpenses />
      <CampaignAndTargets />
      <ProductPricesVsExpenses />
      <ListOfProducts />
      <RecentOrders />
      <ExpensesByCategory />
      <OverallSummery />
    </Box>
  );
};

export default Dashboard;
