import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetProductsQuery } from "@/state/api";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";

const ListOfProducts = () => {
  const { palette } = useTheme();

  const { data } = useGetProductsQuery();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `₹${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `₹${params.value}`,
    },
  ];

  return (
    <DashboardBox gridArea="g">
      <BoxHeader
        title="List of Products"
        sideText={`${data?.length} products`}
      />
      <Box
        mt="0.5rem"
        p="0 0.5rem"
        height="75%"
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

export default ListOfProducts;
