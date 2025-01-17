import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const apiURL = `${backendUrl}/products`;

const params = {
  offset: 0,
  limit: 8,
  sort: "ID_ASC",
};

export const fetchMiniCatalog = async () => {
  const res = await axios.get(apiURL, { params });
  return res.data;
};
