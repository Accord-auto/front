import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "../features/articles/articlesSlice";
import offersSlice from "../features/specialOffers/offersSlice";
import miniCatalogSlice from "../features/miniCatalog/miniCatalogSlice";
import partnershipSlice from "../features/partnership/partnershipSlice";
import productSlice from "../features/product/productSlice";
import filtersSlice from "../features/filters/filtersSlice";
import RegionsSlice from "../features/regions/RegionsSlice";
import branchesSlice from "../features/branches/branchesSlice";

export const store = configureStore({
  reducer: {
    articles: articlesSlice,
    offers: offersSlice,
    minicatalog: miniCatalogSlice,
    partnership: partnershipSlice,
    product: productSlice,
    filters: filtersSlice,
    regions: RegionsSlice,
    branches: branchesSlice,
  },
});
