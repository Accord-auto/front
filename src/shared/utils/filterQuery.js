export const filterQuery = ({
  categoryId,
  minPrice,
  maxPrice,
  offset,
  limit,
  sort,
  filters,
}) => {
  const params = new URLSearchParams();
  if (categoryId) params.append("categoryId", categoryId);
  if (minPrice) params.append("minPrice", minPrice);
  if (maxPrice) params.append("maxPrice", maxPrice);
  if (offset !== undefined) params.append("offset", offset);
  if (limit !== undefined) params.append("limit", limit);
  if (sort) params.append("sort", sort);

  if (filters && Object.keys(filters).length > 0) {
    const filtersParams = Object.entries(filters)
      .map(([key, values]) => `${key}=${values.join(",")}`)
      .join("&");
    params.append("filter", filtersParams);
  }

  return params.toString();
};
