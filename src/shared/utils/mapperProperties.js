export const mapperProperties = (properties) => {
  const mapperProperties = Object.entries(properties).map(
    ([key, values]) =>
      `${key.charAt(0).toUpperCase() + key.slice(1)}: ${values.join(", ")}`
  );
  console.log(mapperProperties);
  return mapperProperties;
};
