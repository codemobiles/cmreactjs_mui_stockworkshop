import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import axios from "axios";
import { imageUrl } from "../../../Constants";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "image",
    headerName: "IMAGE",
    width: 100,
    renderCell: ({ value }: GridRenderCellParams<string>) => {
      return (
        <img
          src={`${imageUrl}/images/${value}?dummy=${Math.random()}`}
          style={{ width: 70, height: 70, borderRadius: "5%" }}
        />
      );
    },
  },
  { field: "name", headerName: "NAME", width: 430 },
  { field: "price", headerName: "PRICE", width: 130 },
  { field: "stock", headerName: "STOCK", width: 130 },
];

// const rows = [
//   { id: 1, name: "Snow1", price: "Jon", stock: 35 },
//   { id: 2, name: "Snow2", price: "Jon", stock: 35 },
//   { id: 3, name: "Snow3", price: "Jon", stock: 35 },
// ];

export default function DataTable() {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:8085/api/v2/stock/product").then((result) => {
      setRows(result.data);
    });
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
