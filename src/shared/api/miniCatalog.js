import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const apiURL = `${backendUrl}/products`;

let params = {
  offset: 0,
  limit: null,
  sort: null,
};

export const paramsChange = (lim, typeSort, page) => {
  params = { ...params, limit: lim, sort: typeSort, offset: (page - 1) * lim };
  console.log(params);
};

export const fetchMiniCatalog = async () => {
  console.log(params);
  const res = await axios.get(apiURL, { params });
  return res.data;
};
