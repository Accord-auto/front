import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const apiURL = `${backendUrl}/products`;

export const fetchProduct = async (id) => {
  const res = await axios.get(`${apiURL}/${id}`);
  return res.data;
};
