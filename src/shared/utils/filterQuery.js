export const filterQuery = ({
  categoryIds = [],
  minPrice,
  maxPrice,
  offset,
  limit,
  sort,
  filters,
}) => {
  const params = new URLSearchParams();

  categoryIds.forEach((elem) => params.append("categoryIds", elem));

  if (minPrice) params.append("minPrice", minPrice);
  if (maxPrice) params.append("maxPrice", maxPrice);
  //   if (offset !== undefined) params.append("offset", offset);
  //   if (limit !== undefined) params.append("limit", limit);
  //   if (sort) params.append("sort", sort);

  if (filters && Object.keys(filters).length > 0) {
    Object.entries(filters).forEach(([key, values]) => {
      values.forEach((value) => params.append(key, value));
    });
  }

  return params.toString();
};
