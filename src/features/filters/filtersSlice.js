import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  funcFetchBrands,
  funcFetchCategories,
  funcFetchFilteredCatalog,
  funcFetchMaxPrice,
  funcFetchProperties,
} from "./filtersFunction";

export const fetchCategoriesThunk = createAsyncThunk(
  "filters/fetchCategories",
  funcFetchCategories
);

export const fetchMaxPriceThunk = createAsyncThunk(
  "filters/fetchMaxPrice",
  funcFetchMaxPrice
);

export const fetchBrandsThunk = createAsyncThunk(
  "filters/fetchBrands",
  funcFetchBrands
);

export const fetchPropertiesThunk = createAsyncThunk(
  "filters/fetchProperties",
  funcFetchProperties
);

export const fetchFilteredCatalogThunk = createAsyncThunk(
  "filters/fetchFilteredCatalog",
  async (filters, thunkAPI) => {
    try {
      return await funcFetchFilteredCatalog(filters);
    } catch {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  filteredProducts: [],
  setCategories: [],
  setProperties: [],
  setBrands: [],
  selectedBrands: [],
  selectedCategories: [],
  priceRange: [],
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
      state.selectedCategories = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setBrand: (state, action) => {
      state.selectedBrands = action.payload;
    },
    setFilter: (state, action) => {
      const { key, values } = action.payload;
      state.selectedProperties[key] = values;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMaxPriceThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMaxPriceThunk.fulfilled, (state, action) => {
        state.priceRange = [0, action.payload.value];
        state.status = "successfully";
      })
      .addCase(fetchMaxPriceThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchBrandsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBrandsThunk.fulfilled, (state, action) => {
        state.setBrands = action.payload;
        state.brands = state.status = "successfully";
      })
      .addCase(fetchBrandsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
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
      })
      .addCase(fetchFilteredCatalogThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setPriceRange, setFilter, setBrand } =
  filtersSlice.actions;

export default filtersSlice.reducer;
