import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.regions;

export const selectRegionsData = createSelector([root], (rootData) => ({
  countries: rootData.countries,
  regions: rootData.regions,
  cities: rootData.cities,
  selectCity: rootData.selectCity,
  selectCountry: rootData.selectCountry,
  selectRegion: rootData.selectRegion,
  status: rootData.status,
  error: rootData.error,
}));
