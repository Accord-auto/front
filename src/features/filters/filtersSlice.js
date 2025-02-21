import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  funcFetchCategories,
  funcFetchFilteredCatalog,
  funcFetchProperties,
} from "./filtersFunction";

export const fetchCategoriesThunk = createAsyncThunk(
  "filters/fetchCategories",
  funcFetchCategories
);

export const fetchPropertiesThunk = createAsyncThunk(
  "filters/fetchProperties",
  funcFetchProperties
);

export const fetchFilteredCatalogThunk = createAsyncThunk(
  "filters/fetchFilteredCatalog",
  async (filters, thunkAPI) => {
    try {
      await funcFetchFilteredCatalog(filters);
    } catch {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  filteredProducts: [],
  setCategories: [],
  setProperties: [],
  selectedCategory: null,
  priceRange: [100, 10000],
  selectedProperties: {},
  setFilter: {},
  status: "idle",
  error: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setFilter: (state, action) => {
      const { key, values } = action.payload;
      state.selectedProperties[key] = values;
      console.log(state.selectedProperties);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoriesThunk.fulfilled, (state, action) => {
        state.setCategories = action.payload;
        state.status = "successfully";
      })
      .addCase(fetchCategoriesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchPropertiesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPropertiesThunk.fulfilled, (state, action) => {
        state.setProperties = action.payload;
        state.status = "successfully";
      })
      .addCase(fetchPropertiesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchFilteredCatalogThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilteredCatalogThunk.fulfilled, (state, action) => {
        state.filteredProducts = action.payload.content;
        state.status = "successfully";
        console.log(action.payload);
      })
      .addCase(fetchFilteredCatalogThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setPriceRange, setFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
