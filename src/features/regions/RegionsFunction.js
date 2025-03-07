import { fetchCountries } from "../../shared/api/regionApi";

export const funcFetchCountries = async () => {
  const res = await fetchCountries();
  console.log(res);
  return res;
};
