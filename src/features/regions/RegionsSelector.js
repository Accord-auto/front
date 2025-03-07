import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.regions;

export const selectRegionsData = createSelector([root], (rootData) => ({
  countries: rootData.countries,
  selectCountry: rootData.selectCountry,
  status: rootData.status,
  error: rootData.error,
}));
