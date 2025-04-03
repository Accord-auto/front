import axios from "axios";
import { filterQuery } from "../utils/filterQuery";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const fetchCategories = async () => {
  const res = await axios.get(`${backendUrl}/categories`);
  return res.data;
};

export const fetchCharacteristics = async () => {
  const res = await axios.get(`${backendUrl}/properties`);

  const properties = await Promise.all(
    res.data.map(async (elem) => {
      const res2 = await axios.get(`${backendUrl}/properties/${elem.id}`);
      return res2.data;
    })
  );

  return properties;
};

export const fetchFilterCatalog = async (filters) => {
  const params = filterQuery(filters);

  const res = await axios.get(`${backendUrl}/products/filter?${params}`);
  return res.data;
};
