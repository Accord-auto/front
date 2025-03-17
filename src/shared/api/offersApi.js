import axios from "axios";
import { backendUrl } from "../consts/api";

const apiURL = `${backendUrl}/products`;

export const fetchOffers = async () => {
  const res = await axios.get(`${apiURL}/specialOffer`);
  return res.data;
};
