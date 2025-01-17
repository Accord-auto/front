import axios from "axios";
const backendUrl = process.env.import.meta.env.VITE_BACKEND_URL;

const apiURL = `${backendUrl}/articles`;

export const fetchArticles = async () => {
  const res = await axios.get(apiURL);
  return res.data;
};
