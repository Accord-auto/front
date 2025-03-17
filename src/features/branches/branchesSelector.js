import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.branches;

export const selectBranchesData = createSelector([root], (rootData) => ({
  headersBranches: rootData.headersBranches,
  departmentsBranches: rootData.departmentsBranches,
  status: rootData.status,
  error: rootData.error,
}));
