import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.offers;

export const selectOffersData = createSelector([root], (rootData) => ({
  offers: rootData.offers,
  status: rootData.status,
  error: rootData.error,
}));
