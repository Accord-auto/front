import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { funcFetchCountries } from "./RegionsFunction";

export const fetchCountriesThunk = createAsyncThunk(
  "regions/countries",
  funcFetchCountries
);

const regionsSlice = createSlice({
  name: "regions",
  initialState: {
    countries: [],
    selectCountry: "",
    regions: [],
    selectRegion: "Выберите регион",
    cities: [],
    selectCity: "Выберите город",
    status: "idle",
    error: null,
  },
  reducers: {
    updateCountry(state, action) {
      state.selectCountry = action.payload;
      console.log(action.payload);
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
      });
  },
});

export const { updateCountry } = regionsSlice.actions;

export default regionsSlice.reducer;
