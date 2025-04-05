import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.regions;

export const selectRegionsData = createSelector([root], (rootData) => ({
  regions: rootData.regions,
  status: rootData.status,
  error: rootData.error,
}));
