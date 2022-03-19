import {
  server,
  STOCK_CLEAR,
  STOCK_FAILED,
  STOCK_FETCHING,
  STOCK_SUCCESS,
} from "../Constants";
import { httpClient } from "../utils/httpclient";

export const setStockFetchingToState = () => ({
  type: STOCK_FETCHING,
});

export const setStockSuccessToState = (payload: any) => ({
  type: STOCK_SUCCESS,
  payload,
});

export const setStockFailedToState = () => ({
  type: STOCK_FAILED,
});

export const setStockClearToState = () => ({
  type: STOCK_CLEAR,
});

export const loadStock = () => {
  return async (dispatch: any) => {
    try {
      dispatch(setStockFetchingToState());
      const result = await httpClient.get(server.PRODUCT_URL);
      dispatch(setStockSuccessToState(result.data));
    } catch (error) {
      dispatch(setStockFailedToState());
    }
  };
};
