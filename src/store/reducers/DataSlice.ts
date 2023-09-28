import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { Item, Line } from "../../models/Item";
import { Data } from "../../models/Data";
import { Layouts } from "../../constants/constants";

interface DataState {
  items: Item[];
  productLines: Line[];
  isLoading: boolean;
  error: string;
  itemNameFilter: string;
  itemLineFilter: Line[];
  layout: Layouts;
}

const initialState: DataState = {
  items: [],
  productLines: [],
  isLoading: false,
  error: "",
  itemNameFilter: "",
  itemLineFilter: [],
  layout: Layouts.LIST,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    itemsFetchingStart(state) {
      state.isLoading = true;
    },
    itemsFetchingSuccess(state, action: PayloadAction<Data>) {
      state.isLoading = false;
      state.error = "";
      state.items = action.payload.devices;
      const productLines = action.payload.devices.map((item) => {
        return item.line;
      });
      const uniqueLines = productLines.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.id === value.id)
      );
      state.productLines = uniqueLines;
    },
    itemsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    changeItemFilter(state, action: PayloadAction<string>) {
      state.itemNameFilter = action.payload;
    },
    addLineFilterItem(state, action: PayloadAction<Line>) {
      state.itemLineFilter = [...state.itemLineFilter, action.payload];
    },
    removeLineFilterItem(state, action: PayloadAction<string>) {
      state.itemLineFilter = state.itemLineFilter.filter(
        (item) => item.id !== action.payload
      );
    },
    changeTableLayout(state, action: PayloadAction<Layouts>) {
      state.layout = action.payload;
    },
  },
});

const dataReducer = dataSlice.reducer;

const selecAllItems = (state: any) => state.dataReducer.items;

export const selectItemById = createSelector(
  [selecAllItems, (_selecAllItems, id) => id],
  (items, id) => {
    return items.find((item: Item) => item.id === id);
  }
);

export default dataReducer;
