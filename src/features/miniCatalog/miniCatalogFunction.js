import { fetchMiniCatalog } from "../../shared/api/miniCatalog";

export const funcFetchMiniCatalog = async () => {
  const res = await fetchMiniCatalog();
  return res;
};
