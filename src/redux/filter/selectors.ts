import { RootState } from "../store";

export const selectorFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;
