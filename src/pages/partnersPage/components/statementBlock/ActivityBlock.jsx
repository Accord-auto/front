import { useDispatch, useSelector } from "react-redux";
import forselect from "../../../../assets/images/forselect.svg";
import { selectRegionsData } from "../../../../features/regions/RegionsSelector";
import { SelectList } from "../../../../shared/components/selectList/selectList";
import { useState } from "react";
import { updateCountry } from "../../../../features/regions/RegionsSlice";
import { updateField } from "../../../../features/partnership/partnershipSlice";
import { fields } from "../../../../shared/consts/fields";

export const ActivityBlock = () => {
  const dispatch = useDispatch();
  const [selectedField, setSelectedField] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectField = (country) => {
    setSelectedField(country);
    dispatch(updateField(country));
    setIsOpen(false);
  };

  const handleInputField = (e) => {
    setSelectedField(e);
    dispatch(updateField(e));
  };

  return (
    <label
      htmlFor=""
      className="statement-label-select"
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
    >
      Сфера деятельности*
      <div className="statement-cont-inp">
        <input
          className="statement-input-select"
          type="text"
          placeholder="Введите деятельность"
          onChange={(e) => handleInputField(e.target.value)}
          value={selectedField}
        />
        <img
          src={forselect}
          alt=""
          className="statement-inp-img"
          onClick={() => setIsOpen(!isOpen)}
        />
        <SelectList
          list={fields}
          onSelect={handleSelectField}
          isOpen={isOpen}
          selectElement={selectedField}
        />
      </div>
    </label>
  );
};
