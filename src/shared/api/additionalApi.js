import axios from "axios";
import { backendUrl } from "../consts/api";

export const fetchMaxPrice = async () => {
  const res = await axios.get(`${backendUrl}/prices/max-price`);
  return res.data;
};

export const fetchBrands = async () => {
  const res = await axios.get(`${backendUrl}/brands`);
  return res.data;
};
