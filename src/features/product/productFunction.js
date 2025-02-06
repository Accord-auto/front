import { fetchProduct } from "../../shared/api/productApi";

export const funcFetchProduct = async (id) => {
  const res = await fetchProduct(id);
  return res;
};
