import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.minicatalog;

export const selectMiniCatalogData = createSelector([root], (rootData) => ({
  minicatalog: rootData.minicatalog,
  status: rootData.status,
  error: rootData.error,
}));
