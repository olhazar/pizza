import { configureStore } from "@reduxjs/toolkit";

import cart from "./cart/cartSlice";
import pizza from "./pizza/pizzaSlice";
import filter from "./filter/filterSlice";

import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    cart,
    pizza,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
