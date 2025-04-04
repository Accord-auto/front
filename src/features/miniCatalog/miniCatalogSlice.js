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
    pageSize: 5,
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMiniCatalogThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMiniCatalogThunk.fulfilled, (state, action) => {
        console.log("Received data from server:", action.payload.content);
        state.status = "successfully";
        state.minicatalog = action.payload.content;
        state.totalPages = action.payload.totalPages;
        state.totalElements = action.payload.totalElements;
        state.currentPage = Math.max(1, action.payload.currentPage || 1);
        state.pageSize = action.payload.pageSize;
      })
      .addCase(fetchMiniCatalogThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage } = miniCatalogSlice.actions;

export default miniCatalogSlice.reducer;
