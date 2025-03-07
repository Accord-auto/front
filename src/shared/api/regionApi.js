import { countryCodes } from "../consts/regionsConsts";

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
