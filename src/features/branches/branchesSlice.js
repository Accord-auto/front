import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  funcFetchDepartmentsBranches,
  funcFetchHeaderBranches,
} from "./branchesFunction";

export const fetchHeaderBranchesThunk = createAsyncThunk(
  "branches/fetchHeaderBranches",
  funcFetchHeaderBranches
);

export const fetchDepartmentsBranchesThunk = createAsyncThunk(
  "branches/fetchDepartmentsBranches",
  funcFetchDepartmentsBranches
);

const branchesSlice = createSlice({
  name: "branches",
  initialState: {
    headersBranches: [],
    departmentsBranches: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeaderBranchesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHeaderBranchesThunk.fulfilled, (state, action) => {
        state.status = "successfully";
        state.headersBranches = action.payload;
      })
      .addCase(fetchHeaderBranchesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchDepartmentsBranchesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDepartmentsBranchesThunk.fulfilled, (state, action) => {
        state.status = "successfully";
        state.departmentsBranches = action.payload;
      })
      .addCase(fetchDepartmentsBranchesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default branchesSlice.reducer;
