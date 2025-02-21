import { useState } from "react";
import arrow from "../../../../../assets/images/arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectFiltersData } from "../../../../../features/filters/filtersSelector";
import { setFilter } from "../../../../../features/filters/filtersSlice";

export const ValueBlock = ({ title, items }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const { selectedProperties } = useSelector(selectFiltersData);

  if (!items || items?.length === 0) return;

  const selectedValues = selectedProperties[title] || [];

  const handleChange = (value) => {
    const updatesValues = selectedValues.includes(value)
      ? selectedValues.filter((elem) => elem !== value)
      : [...selectedValues, value];
    dispatch(setFilter({ key: title, values: updatesValues }));
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
            <div className="dropdown-element" key={item?.id}>
              <input
                type="checkbox"
                className="dropdown-element-checkbox"
                checked={selectedValues.includes[item.value]}
                onChange={() => handleChange(item.value)}
              />
              <p className="dropdown-element-text">{item.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
