import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.filters;

export const selectFiltersData = createSelector([root], (rootData) => ({
  filteredProducts: rootData.filteredProducts,
  setCategories: rootData.setCategories,
  setProperties: rootData.setProperties,
  selectedCategory: rootData.selectedCategory,
  priceRange: rootData.priceRange,
  selectedProperties: rootData.selectedProperties,
  status: rootData.status,
  error: rootData.error,
}));
