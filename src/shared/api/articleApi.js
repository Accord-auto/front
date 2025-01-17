import axios from "axios";

const apiURL = "http://10.3.24.115:8080/articles";

export const fetchArticles = async () => {
  const res = await axios.get(apiURL);
  return res.data;
};
