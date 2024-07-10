import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzas } from "./asyncAction";
import { PizzaSliceState, Status } from "./types";

// export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
//   "pizza/fetchPizzasStatus",
//   async (params) => {
//     const { sortBy, order, category, search, currentPage } = params;
//     const { data } = await axios.get<Pizza[]>(
//       `https://667ec7dbf2cb59c38dc70152.mockapi.io/items?page=${currentPage}&limit=4${search}&${category}&sortBy=${sortBy}&order=${order}`
//     );

//     return data;
//   }
// );

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
