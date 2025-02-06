import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { funcFetchProduct } from "./productFunction";

export const fetchProductThunk = createAsyncThunk(
  "product/fetchProduct",
  async (id, thunkAPI) => {
    try {
      return await funcFetchProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductThunk.fulfilled, (state, action) => {
        state.status = "successfully";
        state.product = action.payload;
        console.log(state.product);
      })
      .addCase(fetchProductThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
