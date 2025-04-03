import { fetchHeaderBranches } from "../../shared/api/branches";

export const funcFetchHeaderBranches = async () => {
  const res = await fetchHeaderBranches();
  return res;
};

export const funcFetchDepartmentsBranches = async () => {
  // const res = await fetchDepartmentsBranches();
  // return res;
};
