import { useDispatch, useSelector } from "react-redux";
import { paramsChange } from "../../shared/api/miniCatalog";
import "./catalogpage.css";
import { CatalogBlock } from "./components/catalogBlock/CatalogBlock";
import { SortComponent } from "./components/sortComponent/SortComponent";
import { selectMiniCatalogData } from "../../features/miniCatalog/miniCatalogSelector";
import { useEffect, useState } from "react";
import { fetchMiniCatalogThunk } from "../../features/miniCatalog/miniCatalogSlice";
import { Loader } from "../../shared/components/loader/Loader";
import { ErrorComponent } from "../../shared/components/errorComp/ErrorComponent";
import { FiltersComponent } from "./components/filtersComponent/FiltersComponent";
import {
  fetchCategoriesThunk,
  fetchFilteredCatalogThunk,
  fetchPropertiesThunk,
} from "../../features/filters/filtersSlice";

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(selectMiniCatalogData);

  const [typeSort, setTypeSort] = useState("ID_ASC");
  const [nameSort, setNameSort] = useState("Сортировать");
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
    dispatch(fetchPropertiesThunk());
  }, [dispatch]);

  useEffect(() => {
    if (filters) {
      dispatch(fetchFilteredCatalogThunk(filters));
    } else {
      paramsChange(20, typeSort);
      dispatch(fetchMiniCatalogThunk());
    }
  }, [dispatch, filters, typeSort]);

  if (status === "loading") {
    return <Loader />;
  }

  // if (status === "successfully") {
  //   onLoaded();
  // }

  if (status === "failed") {
    return <ErrorComponent text={"товары"} />;
  }

  return (
    <div className="catalog-page">
      <p className="miniCat-title">Каталог</p>
      <div className="catalog-page-container">
        <div className="catalog-sort-filter-cont">
          <SortComponent
            setType={setTypeSort}
            name={nameSort}
            setName={setNameSort}
          />
          <FiltersComponent setFilt={setFilters} />
        </div>

        <CatalogBlock filters={filters} />
      </div>
    </div>
  );
};
