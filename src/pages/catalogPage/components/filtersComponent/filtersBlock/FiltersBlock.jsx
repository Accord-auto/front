import { useState } from "react";
import arrow from "../../../../../assets/images/arrow.svg";
import "./filtersblock.css";
import { useDispatch } from "react-redux";
import { setCategory } from "../../../../../features/filters/filtersSlice";

export const FiltersBlock = ({ title, items, type }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [selctedItem, setSelectedItem] = useState(null);

  if (!items || items?.length === 0) return;

  const handleChange = (id) => {
    setSelectedItem(id);
    if (type === "category") {
      dispatch(setCategory(id));
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
                checked={selctedItem === item.id}
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
