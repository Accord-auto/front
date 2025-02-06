import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.product;

export const selectProductData = createSelector([root], (rootData) => ({
  product: rootData.product,
  status: rootData.status,
  error: rootData.error,
}));
