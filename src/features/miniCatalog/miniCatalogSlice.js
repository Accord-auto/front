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
    totalPages: 1,
    totalElements: 0,
    currentPage: 1,
    pageSize: 20,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMiniCatalogThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMiniCatalogThunk.fulfilled, (state, action) => {
        state.status = "successfully";
        state.minicatalog = action.payload.content;
        state.totalPages = action.payload.totalPages;
        state.totalElements = action.payload.totalElements;
        state.currentPage = action.payload.currentPage;
        state.pageSize = action.payload.pageSize;
      })
      .addCase(fetchMiniCatalogThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default miniCatalogSlice.reducer;
