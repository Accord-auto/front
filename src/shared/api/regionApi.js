import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const apiURL = `${backendUrl}/regions`;

export const fetchRegions = async () => {
  const res = await axios.get(`${apiURL}?page=0&maxRows=50`);
  return res.data;
};
