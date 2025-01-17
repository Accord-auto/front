import { fetchOffers } from "../../shared/api/offersApi";

export const funcFetchOffers = async () => {
  const res = await fetchOffers();
  return res;
};
