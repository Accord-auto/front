import axios from "axios";

const apiURL = "http://10.3.24.115:8080/products";

export const fetchOffers = async () => {
  const res = await axios.get(`${apiURL}/specialOffer`);
  return res.data;
};
