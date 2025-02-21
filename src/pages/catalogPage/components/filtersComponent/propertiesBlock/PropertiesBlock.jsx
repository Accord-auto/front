import { useState } from "react";
import "./propertiesblock.css";
import arrow from "../../../../../assets/images/arrow.svg";
import { FiltersBlock } from "../filtersBlock/FiltersBlock";
import { ValueBlock } from "./ValueBlock";

export const PropertiesBlock = ({ items }) => {
  const [isActive, setIsActive] = useState(false);
  if (!items) {
    return;
  }

  return (
    <div className="filters-block-container">
      <div className="filters-cont-2" onClick={() => setIsActive(!isActive)}>
        <p className="filters-text">Характеристики</p>
        <img
          src={arrow}
          alt=""
          className={`filters-icon ${isActive ? "rotated" : ""}`}
        />
      </div>
      {isActive && (
        <div className="dropdown-list">
          {items.map((item) => (
            <ValueBlock title={item.name} items={item.values} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};
