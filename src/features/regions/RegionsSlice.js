import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  funcFetchCities,
  funcFetchCountries,
  funcFetchRegions,
} from "./RegionsFunction";

export const fetchCountriesThunk = createAsyncThunk(
  "regions/countries",
  funcFetchCountries
);

export const fetchRegionsThunk = createAsyncThunk(
  "regions/regionsList",
  funcFetchRegions
);

export const fetchCitiesThunk = createAsyncThunk(
  "regions/citiesList",
  funcFetchCities
);

const regionsSlice = createSlice({
  name: "regions",
  initialState: {
    countries: [],
    selectCountry: "",
    regions: [],
    selectRegion: "",
    cities: [],
    selectCity: "",
    status: "idle",
    error: null,
  },
  reducers: {
    updateCountry(state, action) {
      state.selectCountry = action.payload;
    },
    updateRegion(state, action) {
      state.selectRegion = action.payload;
    },
    updateCity(state, action) {
      state.selectCity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountriesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCountriesThunk.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.status = "successfully";
      })
      .addCase(fetchCountriesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
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
        console.log("Ошибка при получении регионов:", action.error);
      })
      .addCase(fetchCitiesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCitiesThunk.fulfilled, (state, action) => {
        state.cities = action.payload;
        state.status = "successfully";
      })
      .addCase(fetchCitiesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.log("Ошибка при получении регионов:", action.error);
      });
  },
});

export const { updateCountry, updateRegion, updateCity } = regionsSlice.actions;

export default regionsSlice.reducer;
