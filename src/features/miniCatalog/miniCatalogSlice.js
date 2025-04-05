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
    pageSize: 50,
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setPageSize(state, action) {
      state.pageSize = action.payload;
    },
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

        // Не обновляем currentPage из ответа, т.к. бэкенд его не присылает
        // Но можно добавить проверку, если страница стала некорректной
        if (state.currentPage > action.payload.totalPages) {
          state.currentPage = Math.max(1, action.payload.totalPages);
        }

        // pageSize остается неизменным (управляется фронтом)
      })
      .addCase(fetchMiniCatalogThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage, setPageSize } = miniCatalogSlice.actions;

export default miniCatalogSlice.reducer;
