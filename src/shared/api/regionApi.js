import axios from "axios";
import { backendUrl } from "../consts/api";
import { countryCodes } from "../consts/regionsConsts";

const apiURL = `${backendUrl}/regions`;

export const fetchCountries = async () => {
  try {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://restcountries.com/v3.1/all"
    );
    const data = await response.json();

    const countries = data
      .filter((country) => countryCodes.includes(country.cca2))
      .map((country) => country.translations.rus.common || country.name.common);

    return countries;
  } catch (error) {
    console.error("Ошибка при получении списка стран:", error);
  }
};

export const fetchRegions = async () => {
  const res = await axios.get(`${apiURL}?page=0&maxRows=50`);
  return res.data;
};

export const fetchCities = async (id) => {
  const res = await axios.get(`${apiURL}/${id}/cities?page=0&maxRows=50`);
  console.log(res);
  return res.data;
};
