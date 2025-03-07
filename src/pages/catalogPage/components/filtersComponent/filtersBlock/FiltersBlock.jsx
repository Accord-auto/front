import { useState } from "react";
import arrow from "../../../../../assets/images/arrow.svg";
import "./filtersblock.css";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../../../features/filters/filtersSlice";
import { selectFiltersData } from "../../../../../features/filters/filtersSelector";

export const FiltersBlock = ({ title, items, type }) => {
  const dispatch = useDispatch();
  const { selectedCategories } = useSelector(selectFiltersData);
  const [isActive, setIsActive] = useState(false);

  if (!items || items?.length === 0) return;

  const handleChange = (id) => {
    switch (type) {
      case "category":
        const updatedCategories = selectedCategories.includes(id)
          ? selectedCategories.filter((elem) => elem !== id)
          : [...selectedCategories, id];

        dispatch(setCategory(updatedCategories));
        break;
      case "brand":
        break;
      default:
        break;
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
          {items.map((item) => (
            <div className="dropdown-element" key={item.id}>
              <input
                type="checkbox"
                className="dropdown-element-checkbox"
                checked={selectedCategories.includes(item.id)}
                onChange={() => handleChange(item.id)}
              />
              <p className="dropdown-element-text">{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
