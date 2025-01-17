import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { funcFetchOffers } from "./offersFunction";

export const fetchOffersThunk = createAsyncThunk(
  "offers/fetchOffers",
  funcFetchOffers
);

const offersSlice = createSlice({
  name: "offers",
  initialState: {
    offers: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOffersThunk.fulfilled, (state, action) => {
        state.status = "successfully";
        state.offers = action.payload;
      })
      .addCase(fetchOffersThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default offersSlice.reducer;
