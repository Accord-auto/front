import { useState } from "react";
import { selectFiltersData } from "../../../../../features/filters/filtersSelector";
import "./pricerange.css";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "../../../../../features/filters/filtersSlice";

export const PriceRange = () => {
  const dispatch = useDispatch();
  const { priceRange } = useSelector(selectFiltersData);
  const [minValue, setMinValue] = useState(priceRange[0]);
  const [maxValue, setMaxValue] = useState(priceRange[1]);

  const MIN = 0;
  const MAX = priceRange[1];

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 100);
    setMinValue(value);
    dispatch(setPriceRange([value, maxValue]));
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 100);
    setMaxValue(value);
    dispatch(setPriceRange([minValue, value]));
  };

  return (
    <div className="price-range-container">
      <p className="filter-title">Цена</p>
      <div className="slider-container">
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={minValue}
          onChange={handleMinChange}
          className="thumb thumb-left"
        />
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={maxValue}
          onChange={handleMaxChange}
          className="thumb thumb-right"
        />
        <div
          className="range-bar"
          style={{
            left: `${((minValue - MIN) / (MAX - MIN)) * 100}%`,
            right: `${100 - ((maxValue - MIN) / (MAX - MIN)) * 100}%`,
          }}
        />
      </div>
      <div className="price-labels">
        <span className="price-labels-text">{minValue} Р</span>
        <span className="price-labels-text">{maxValue} Р</span>
      </div>
    </div>
  );
};
