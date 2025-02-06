import "./dropdownlist.css";
import left from "../../../assets/images/left.svg";
import { useState } from "react";

export const DropdownList = ({ btn, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isArray = Array.isArray(data);
  return (
    <div className={`dropdown ${isOpen ? "dropdown-open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn">
        {btn}
        <img src={left} alt="" className="dropdown-svg" />
      </button>
      <div className="dropdown-body">
        {isArray ? (
          data?.map((element) => <p className="dropdown-text">{element}</p>)
        ) : (
          <p className="dropdown-text">{data}</p>
        )}
      </div>
    </div>
  );
};
