import axios from "axios";

const apiURL = "http://10.3.24.115:8080/products";

const params = {
  offset: 0,
  limit: 8,
  sort: "ID_ASC",
};

export const fetchMiniCatalog = async () => {
  const res = await axios.get(apiURL, { params });
  return res.data;
};
