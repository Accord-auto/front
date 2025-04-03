import {
  fetchCities,
  fetchCountries,
  fetchRegions,
} from "../../shared/api/regionApi";

export const funcFetchCountries = async () => {
  const res = await fetchCountries();
  return res;
};

export const funcFetchRegions = async () => {
  const res = await fetchRegions();
  return res;
};

export const funcFetchCities = async (id) => {
  console.log(id);
  const res = await fetchCities(id);
  return res;
};
