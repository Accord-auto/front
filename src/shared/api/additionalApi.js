import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const fetchMaxPrice = async () => {
  const res = await axios.get(`${backendUrl}/prices/max-price`);
  return res.data;
};

export const fetchBrands = async () => {
  const res = await axios.get(`${backendUrl}/brands`);
  return res.data;
};
