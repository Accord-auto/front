import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { funcFetchRegions } from "./RegionsFunction";

export const fetchRegionsThunk = createAsyncThunk(
  "regions/regionsList",
  funcFetchRegions
);

const regionsSlice = createSlice({
  name: "regions",
  initialState: {
    regions: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegionsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRegionsThunk.fulfilled, (state, action) => {
        state.regions = action.payload;
        state.status = "successfully";
      })
      .addCase(fetchRegionsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default regionsSlice.reducer;
