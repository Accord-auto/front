import { useState } from "react";
import "./filterscomponent.css";
import { FiltersBlock } from "./filtersBlock/FiltersBlock";
import { useSelector } from "react-redux";
import { PriceRange } from "./priceRange/PriceRange";
import { selectFiltersData } from "../../../../features/filters/filtersSelector";
import { PropertiesBlock } from "./propertiesBlock/PropertiesBlock";

export const FiltersComponent = ({ setFilt }) => {
  const { setCategories, setProperties } = useSelector(selectFiltersData);
  const { selectedCategories, priceRange, selectedProperties } =
    useSelector(selectFiltersData);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleFilter = () => {
    setFilt({
      categoryIds: selectedCategories,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      offset: 0,
      limit: 20,
      sort: "ID_ASC",
      filters: selectedProperties,
    });
    toggleMenu();
  };

  return (
    <div className="filters-container">
      <div className={`filters-cont ${isActive ? "open" : ""}`}>
        <FiltersBlock title="Категории" items={setCategories} type="category" />
        <FiltersBlock title="Бренды" type="brands" />
        <PropertiesBlock items={setProperties} />
        <PriceRange />
        <button className="btn-filter" onClick={handleFilter}>
          Показать товары
        </button>
      </div>

      <div
        className={`burger-filters ${isActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
      </div>
    </div>
  );
};
