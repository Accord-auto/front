import { useDispatch, useSelector } from "react-redux";
import forselect from "../../../../assets/images/forselect.svg";
import { selectRegionsData } from "../../../../features/regions/RegionsSelector";
import { SelectList } from "../../../../shared/components/selectList/selectList";
import { useState } from "react";
import { selectPartnershipData } from "../../../../features/partnership/partnershipSelector";
import { updateRegion } from "../../../../features/partnership/partnershipSlice";

export const RegionBlock = () => {
  const dispatch = useDispatch();
  const { regions } = useSelector(selectRegionsData);
  const [isOpen, setIsOpen] = useState(false);
  const { partnership } = useSelector(selectPartnershipData);

  const handleSelectRegion = (region, e) => {
    e?.preventDefault();
    dispatch(updateRegion(region.name));
    setIsOpen(false);
  };

  const handleInputRegion = (e) => {
    dispatch(updateRegion(e.target.value));
  };

  return (
    <label
      htmlFor=""
      className="statement-label-select"
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
    >
      Регион*
      <div className="statement-cont-inp">
        <input
          className="statement-input-select"
          type="text"
          placeholder="Введите регион"
          onChange={(e) => handleInputRegion(e)}
          value={partnership.region}
        />
        <img
          src={forselect}
          alt=""
          className="statement-inp-img"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <SelectList
          list={regions?.geonames}
          onSelect={handleSelectRegion}
          isOpen={isOpen}
          selectElement={partnership.region}
        />
      </div>
    </label>
  );
};
