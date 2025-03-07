export const mapperProperties = (properties, category, brand, count) => {
  console.log(properties, category, brand, count);
  // mapperPropertiesConst.push("Категория товара: " + category);

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
