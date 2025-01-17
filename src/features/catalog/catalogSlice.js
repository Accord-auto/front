import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { funcFetchMiniCatalog } from "./miniCatalogFunction";

export const fetchCatalogThunk = createAsyncThunk(
  "minicatalog/fetchMiniCatalog",
  funcFetchMiniCatalog
);

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    catalog: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCatalogThunk.fulfilled, (state, action) => {
        state.status = "successfully";
        state.catalog = action.payload.content;
      })
      .addCase(fetchCatalogThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default catalogSlice.reducer;
