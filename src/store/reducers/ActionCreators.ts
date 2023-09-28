import axios from "axios";
import { AppDispatch } from "../store";
import { dataSlice } from "./DataSlice";
import { Data } from "../../models/Data";
import { Line } from "../../models/Item";
import { Layouts } from "../../constants/constants";

const dataUrl = "https://static.ui.com/fingerprint/ui/public.json";

export const fetchItems = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(dataSlice.actions.itemsFetchingStart());
    const response = await axios.get<Data>(dataUrl);
    dispatch(dataSlice.actions.itemsFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(dataSlice.actions.itemsFetchingError(e.message));
  }
};

export const filterItems = (value: string) => (dispatch: AppDispatch) => {
  dispatch(dataSlice.actions.changeItemFilter(value));
};

export const addLineToFilter = (item: Line) => (dispatch: AppDispatch) => {
  dispatch(dataSlice.actions.addLineFilterItem(item));
};

export const removeLineFromFilter = (id: string) => (dispatch: AppDispatch) => {
  dispatch(dataSlice.actions.removeLineFilterItem(id));
};

export const switchTableLayout =
  (layout: Layouts) => (dispatch: AppDispatch) => {
    dispatch(dataSlice.actions.changeTableLayout(layout));
  };
