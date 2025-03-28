import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetTransactionsQuery } from "@/state/api";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";

const RecentOrders = () => {
  const { palette } = useTheme();

  const { data } = useGetTransactionsQuery();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 0.7,
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.67,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.45,
      renderCell: (params: GridCellParams) => `₹${params.value}`,
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.1,
      renderCell: (params: GridCellParams) =>
        `${(params.value as Array<string>).length}`,
    },
  ];

  return (
    <DashboardBox gridArea="h">
      <BoxHeader
        title="Recent Orders"
        sideText={`${data?.length} latest transactions`}
      />
      <Box
        mt="1rem"
        p="0 0.5rem"
        height="80%"
        sx={{
          "& .MuiDataGrid-root": { color: palette.grey[300], border: "none" },
          "& .MuiDataGrid-cell": {
            border: "none",
            borderBottom: `1px solid ${palette.grey[800]} !important`,
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: `1px solid ${palette.grey[800]} !important`,
          },
          "& .MuiDataGrid-columnSeparator": {
            visibility: "hidden",
          },
        }}
      >
        <DataGrid
          rows={data || []}
          columns={columns}
          columnHeaderHeight={25}
          rowHeight={35}
          hideFooter={true}
        />
      </Box>
    </DashboardBox>
  );
};

export default RecentOrders;
