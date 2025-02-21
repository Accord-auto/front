import {
  fetchCategories,
  fetchCharacteristics,
  fetchFilterCatalog,
} from "../../shared/api/filtersApi";

export const funcFetchCategories = async () => {
  const res = await fetchCategories();
  return res;
};

export const funcFetchProperties = async () => {
  const res = await fetchCharacteristics();
  return res;
};

export const funcFetchFilteredCatalog = async (filters) => {
  const res = await fetchFilterCatalog(filters);
  return res;
};
