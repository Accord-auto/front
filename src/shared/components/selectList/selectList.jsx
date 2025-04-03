import "./selectlist.css";

export const SelectList = ({ list, onSelect, isOpen, selectElement }) => {
  if (!isOpen) return null;
  return (
    <div className="sl-container">
      {list?.map((element, i) => (
        <p
          className={`sl-text ${selectElement === element ? "selected" : ""}`}
          onClick={(e) => onSelect(element, e)}
          key={i}
        >
          {element.name || element}
        </p>
      ))}
      <p></p>
    </div>
  );
};
