import { useState } from "react";
import arrow from "../../../../../assets/images/arrow.svg";
import "./filtersblock.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setBrand,
  setCategory,
} from "../../../../../features/filters/filtersSlice";
import { selectFiltersData } from "../../../../../features/filters/filtersSelector";

export const FiltersBlock = ({ title, items, type }) => {
  const dispatch = useDispatch();
  const { selectedCategories, selectedBrands } = useSelector(selectFiltersData);
  const [isActive, setIsActive] = useState(false);

  if (!items || items?.length === 0) return;

  const handleChange = (item) => {
    if (type === "category") {
      const updatedCategories = selectedCategories.includes(item.id)
        ? selectedCategories.filter((elem) => elem !== item.id)
        : [...selectedCategories, item.id];

      dispatch(setCategory(updatedCategories));
    }

    if (type === "brand") {
      const updatedBrands = selectedBrands.includes(item)
        ? selectedBrands.filter((elem) => elem !== item)
        : [...selectedBrands, item];

      dispatch(setBrand(updatedBrands));
    }
  };

  const handleIsChecked = (elem) => {
    if (type === "category") {
      const isCheck = selectedCategories.includes(elem.id);
      return isCheck;
    }

    if (type === "brand") {
      const isCheck = selectedBrands.includes(elem);
      return isCheck;
    }
  };

  return (
    <div className="filters-block-container">
      <div className="filters-cont-2" onClick={() => setIsActive(!isActive)}>
        <p className="filters-text">{title}</p>
        <img
          src={arrow}
          alt=""
          className={`filters-icon ${isActive ? "rotated" : ""}`}
        />
      </div>
      {isActive && (
        <div className="dropdown-list">
          {items.map((item, i) => (
            <div className="dropdown-element" key={i}>
              <input
                type="checkbox"
                className="dropdown-element-checkbox"
                checked={handleIsChecked(item)}
                onChange={() => handleChange(item)}
              />
              <p className="dropdown-element-text">{item.name || item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
