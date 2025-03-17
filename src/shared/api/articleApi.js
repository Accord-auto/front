import axios from "axios";
import { backendUrl } from "../consts/api";

const apiURL = `${backendUrl}/articles`;

export const fetchArticles = async () => {
  const res = await axios.get(apiURL);
  return res.data;
};
