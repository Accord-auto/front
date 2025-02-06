import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "../features/articles/articlesSlice";
import offersSlice from "../features/specialOffers/offersSlice";
import miniCatalogSlice from "../features/miniCatalog/miniCatalogSlice";
import partnershipSlice from "../features/partnership/partnershipSlice";
import productSlice from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    articles: articlesSlice,
    offers: offersSlice,
    minicatalog: miniCatalogSlice,
    partnership: partnershipSlice,
    product: productSlice,
  },
});
