import "./sortcomponent.css";
import { typesSort } from "../../../../shared/utils/typesSort";
import sort from "../../../../assets/images/sort.svg";
import check from "../../../../assets/images/check.svg";
import { useState } from "react";

export const SortComponent = ({ setType, name, setName }) => {
  const [showSelect, setShowSelect] = useState(false);

  const handleShowSelect = () => {
    setShowSelect(!showSelect);
  };

  const selectedSort = (namesort, type) => {
    setName(namesort);
    setType(type);
    setShowSelect(!showSelect);
  };

  return (
    <div className="sort-container" tabIndex={0} onBlur={handleShowSelect}>
      <div className="sort-cont" onClick={handleShowSelect}>
        <img src={sort} alt="sort" className="sort-icon" />
        <p className="sort-name">{name}</p>
      </div>
      <div className={`sort-select ${showSelect ? "sort-select-open" : ""} `}>
        {typesSort?.map((elem, i) => (
          <div
            className="sort-select-cont-2"
            onClick={() => selectedSort(elem.name, elem.typeSort)}
            key={i}
          >
            <p className="sort-select-text">{elem.name}</p>
            {name === elem.name ? (
              <img src={check} className="sort-check" />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
