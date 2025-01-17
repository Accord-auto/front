import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.partnership;

export const selectPartnershipData = createSelector([root], (rootData) => ({
  partnership: rootData.partnership,
  status: rootData.status,
  error: rootData.error,
}));
