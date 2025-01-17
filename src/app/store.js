import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "../features/articles/articlesSlice";
import offersSlice from "../features/specialOffers/offersSlice";
import miniCatalogSlice from "../features/miniCatalog/miniCatalogSlice";
import partnershipSlice from "../features/partnership/partnershipSlice";

export const store = configureStore({
  reducer: {
    articles: articlesSlice,
    offers: offersSlice,
    minicatalog: miniCatalogSlice,
    partnership: partnershipSlice,
  },
});
