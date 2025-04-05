import { useDispatch, useSelector } from "react-redux";
import { paramsChange } from "../../shared/api/miniCatalog";
import "./catalogpage.css";
import { CatalogBlock } from "./components/catalogBlock/CatalogBlock";
import { SortComponent } from "./components/sortComponent/SortComponent";
import { selectMiniCatalogData } from "../../features/miniCatalog/miniCatalogSelector";
import { useEffect, useState } from "react";
import {
  fetchMiniCatalogThunk,
  setCurrentPage,
} from "../../features/miniCatalog/miniCatalogSlice";
import { Loader } from "../../shared/components/loader/Loader";
import { ErrorComponent } from "../../shared/components/errorComp/ErrorComponent";
import { FiltersComponent } from "./components/filtersComponent/FiltersComponent";
import {
  fetchBrandsThunk,
  fetchCategoriesThunk,
  fetchFilteredCatalogThunk,
  fetchMaxPriceThunk,
  fetchPropertiesThunk,
} from "../../features/filters/filtersSlice";
import { PaginationComponent } from "./components/paginationComponent/PaginationComponent";

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const { status, totalPages, currentPage, pageSize } = useSelector(
    selectMiniCatalogData
  );

  const limit = pageSize || 5;
  const [typeSort, setTypeSort] = useState("ID_ASC");
  const [nameSort, setNameSort] = useState("Сортировать");
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
    dispatch(fetchPropertiesThunk());
    dispatch(fetchMaxPriceThunk());
    dispatch(fetchBrandsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (filters) {
      dispatch(
        fetchFilteredCatalogThunk({
          ...filters,
          offset: currentPage - 1, // Страницы с 0
          limit,
        })
      );
    } else {
      paramsChange(limit, typeSort, currentPage);
      dispatch(fetchMiniCatalogThunk());
    }
  }, [dispatch, filters, typeSort, currentPage, limit]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setCurrentPage(newPage));
      // paramsChange вызовется автоматически через useEffect
    }
  };

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
      {totalPages > 1 ? (
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
