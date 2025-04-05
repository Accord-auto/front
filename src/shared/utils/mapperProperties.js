export const mapperProperties = (properties, category, brand, count) => {
  const mapperPropertiesConst = [
    `Категория товара: ${category}`,
    `Бренд: ${brand}`,
    `Кол-во товара: ${count}`,
    ...Object.entries(properties).map(
      ([key, values]) =>
        `${key.charAt(0).toUpperCase() + key.slice(1)}: ${values.join(", ")}`
    ),
  ];

  return mapperPropertiesConst;
};
