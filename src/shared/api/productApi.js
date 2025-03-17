import axios from "axios";
import { backendUrl } from "../consts/api";

const apiURL = `${backendUrl}/products`;

export const fetchProduct = async (id) => {
  const res = await axios.get(`${apiURL}/${id}`);
  return res.data;
};
