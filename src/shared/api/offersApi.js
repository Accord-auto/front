import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const apiURL = `${backendUrl}/products`;

export const fetchOffers = async () => {
  const res = await axios.get(`${apiURL}/specialOffer`);
  return res.data;
};
