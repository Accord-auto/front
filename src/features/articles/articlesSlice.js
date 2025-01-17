import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { funcFetchArticles } from "./articlesFunction";

export const fetchArticlesThunk = createAsyncThunk(
  "articles/fetchArticles",
  funcFetchArticles
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticlesThunk.fulfilled, (state, action) => {
        state.status = "successfully";
        state.articles = action.payload;
      })
      .addCase(fetchArticlesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default articlesSlice.reducer;
