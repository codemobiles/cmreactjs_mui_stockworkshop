import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { imageUrl } from "../../../Constants";
import * as stockActions from "../../../actions/stock.action";
import { useDispatch, useSelector } from "react-redux";
import { RootReducers } from "../../../reducers";
import {
  Typography,
  Stack,
  IconButton,
  Box,
  TextField,
  Fab,
} from "@mui/material";
import NumberFormat from "react-number-format";
import Moment from "react-moment";
import { Add, Clear, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

const stockColumns: GridColDef[] = [
  {
    headerName: "ID",
    field: "id",
    width: 50,
  },
  {
    headerName: "IMG",
    field: "image",
    width: 80,
    renderCell: ({ value }: GridRenderCellParams<string>) => (
      <img
        src={`${imageUrl}/images/${value}?dummy=${Math.random()}`}
        style={{ width: 70, height: 70, borderRadius: "5%" }}
      />
    ),
  },
  {
    headerName: "NAME",
    field: "name",
    width: 500,
  },
  {
    headerName: "STOCK",
    width: 120,
    field: "stock",
    renderCell: ({ value }: GridRenderCellParams<string>) => (
      <Typography variant="body1">
        <NumberFormat
          value={value}
          displayType={"text"}
          thousandSeparator={true}
          decimalScale={0}
          fixedDecimalScale={true}
        />
      </Typography>
    ),
  },
  {
    headerName: "PRICE",
    field: "price",
    width: 120,
    renderCell: ({ value }: GridRenderCellParams<string>) => (
      <Typography variant="body1">
        <NumberFormat
          value={value}
          displayType={"text"}
          thousandSeparator={true}
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={"฿"}
        />
      </Typography>
    ),
  },
  {
    headerName: "TIME",
    field: "createdAt",
    width: 220,
    renderCell: ({ value }: GridRenderCellParams<string>) => (
      <Typography variant="body1">
        <Moment format="DD/MM/YYYY HH:mm">{value}</Moment>
      </Typography>
    ),
  },
  {
    headerName: "ACTION",
    field: ".",
    width: 120,
    renderCell: ({ row }: GridRenderCellParams<string>) => (
      <Stack direction="row">
        <IconButton
          aria-label="edit"
          size="large"
          onClick={() => {
            // navigate("/stock/edit/" + row.product_id);
          }}
        >
          <EditIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => {
            // setSelectedProduct(row);
            // setOpenDialog(true);
          }}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    ),
  },
];

interface QuickSearchToolbarProps {
  clearSearch: () => void;
  onChange: () => void;
  value: string;
}

function QuickSearchToolbar(props: QuickSearchToolbarProps) {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        InputProps={{
          startAdornment: <Search fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? "visible" : "hidden" }}
              onClick={props.clearSearch}
            >
              <Clear fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: "auto",
          },
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          "& .MuiSvgIcon-root": {
            mr: 0.5,
          },
          "& .MuiInput-underline:before": {
            borderBottom: 1,
            borderColor: "divider",
          },
        }}
      />

      <Fab
        color="primary"
        aria-label="add"
        component={Link}
        to="/stock/create"
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
        }}
      >
        <Add />
      </Fab>
    </Box>
  );
}

export default function StockPage() {
  const stockReducer = useSelector((state: RootReducers) => state.stockReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(stockActions.loadStock());
  }, []);

  return (
    <Box>
      <DataGrid
        components={{ Toolbar: QuickSearchToolbar }}
        componentsProps={{
          toolbar: {
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.value);
              dispatch(stockActions.loadStockByKeyword(e.target.value));
            },
          },
        }}
        sx={{ backgroundColor: "white", height: "70vh" }}
        rows={stockReducer.result}
        columns={stockColumns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
}
