import { server, STOCK_EDIT_FAILED, STOCK_EDIT_FETCHING, STOCK_EDIT_SUCCESS } from "../Constants";
import { Product } from "../types/product.type";
import { httpClient } from "../utils/httpclient";
import { history } from "..";

export const setStockFetchingToState = () => ({
  type: STOCK_EDIT_FETCHING,
});

export const setStockSuccessToState = (payload: Product) => ({
  type: STOCK_EDIT_SUCCESS,
  payload,
});

export const setStockFailedToState = () => ({
  type: STOCK_EDIT_FAILED,
});

export const updateProduct = (formData: FormData) => {
  return async (dispatch: any) => {
    await httpClient.put(server.PRODUCT_URL, formData);
    history.back();
  };
};

export const getProductById = (id: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(setStockFetchingToState());
      let result = await httpClient.get<Product>(`${server.PRODUCT_URL}/${id}`);
      dispatch(setStockSuccessToState(result.data));
    } catch (error) {
      alert(JSON.stringify(error));
      dispatch(setStockFailedToState());
    }
  };
};
