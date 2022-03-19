import {
  STOCK_CLEAR,
  STOCK_FAILED,
  STOCK_FETCHING,
  STOCK_SUCCESS,
} from "../Constants";
import { Product } from "../types/product.type";

export interface StockState {
  result: Product[];
  isFetching: boolean;
  isError: boolean;
}

const initialState: StockState = {
  result: [],
  isFetching: false,
  isError: false,
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case STOCK_FETCHING:
      return { ...state, result: [], isFetching: true, isError: false };
    case STOCK_SUCCESS:
      return { ...state, result: payload, isFetching: false, isError: false };
    case STOCK_FAILED:
      return { ...state, result: [], isFetching: false, isError: true };
    case STOCK_CLEAR:
      return { ...state, result: [], isFetching: false, isError: false };
    default:
      return state;
  }
};
