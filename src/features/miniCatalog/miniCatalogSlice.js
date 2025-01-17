import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { funcFetchMiniCatalog } from "./miniCatalogFunction";

export const fetchMiniCatalogThunk = createAsyncThunk(
  "minicatalog/fetchMiniCatalog",
  funcFetchMiniCatalog
);

const miniCatalogSlice = createSlice({
  name: "minicatalog",
  initialState: {
    minicatalog: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMiniCatalogThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMiniCatalogThunk.fulfilled, (state, action) => {
        state.status = "successfully";
        state.minicatalog = action.payload.content;
      })
      .addCase(fetchMiniCatalogThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default miniCatalogSlice.reducer;
