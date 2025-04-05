import { useDispatch, useSelector } from "react-redux";
import forselect from "../../../../assets/images/forselect.svg";
import { selectRegionsData } from "../../../../features/regions/RegionsSelector";
import { SelectList } from "../../../../shared/components/selectList/selectList";
import { useState } from "react";

import { fields } from "../../../../shared/consts/fields";
import { selectPartnershipData } from "../../../../features/partnership/partnershipSelector";
import { updateField } from "../../../../features/partnership/partnershipSlice";

export const ActivityBlock = () => {
  const dispatch = useDispatch();
  const { partnership } = useSelector(selectPartnershipData);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectField = (field) => {
    dispatch(updateField(field));
    setIsOpen(false);
  };

  const handleInputField = (e) => {
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
          value={partnership.field}
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
          selectElement={partnership.field}
        />
      </div>
    </label>
  );
};
