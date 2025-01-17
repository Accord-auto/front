import { fetchArticles } from "../../shared/api/articleApi";

export const funcFetchArticles = async () => {
  const res = await fetchArticles();
  return res;
};
