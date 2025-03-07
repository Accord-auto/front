import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.minicatalog;

export const selectMiniCatalogData = createSelector([root], (rootData) => ({
  minicatalog: rootData.minicatalog,
  totalPages: rootData.totalPages,
  totalElements: rootData.totalElements,
  currentPage: rootData.currentPage,
  pageSize: rootData.pageSize,
  status: rootData.status,
  error: rootData.error,
}));
