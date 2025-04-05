import "./selectlist.css";

export const SelectList = ({ list, onSelect, isOpen, selectElement }) => {
  if (!isOpen) return null;

  const handleClick = (element, e) => {
    e.preventDefault();
    e.stopPropagation();
    onSelect(element, e);
  };
  return (
    <div className="sl-container">
      {list?.map((element, i) => (
        <p
          className={`sl-text ${selectElement === element ? "selected" : ""}`}
          onClick={(e) => handleClick(element, e)}
          key={i}
        >
          {element.name || element}
        </p>
      ))}
      <p></p>
    </div>
  );
};
