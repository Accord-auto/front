import { fetchRegions } from "../../shared/api/regionApi";

export const funcFetchRegions = async () => {
  const res = await fetchRegions();
  return res;
};
