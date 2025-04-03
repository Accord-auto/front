import { useDispatch, useSelector } from "react-redux";
import forselect from "../../../../assets/images/forselect.svg";
import { selectRegionsData } from "../../../../features/regions/RegionsSelector";
import { SelectList } from "../../../../shared/components/selectList/selectList";
import { useState } from "react";
import {
  fetchCitiesThunk,
  updateCountry,
  updateRegion,
} from "../../../../features/regions/RegionsSlice";

export const RegionBlock = () => {
  const dispatch = useDispatch();
  const { regions, selectRegion } = useSelector(selectRegionsData);
  const [selectedRegion, setSelectedRegion] = useState(selectRegion);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectRegion = (region, e) => {
    e.preventDefault();
    setSelectedRegion(region.name);
    dispatch(updateRegion(region.name));
    setIsOpen(false);
    dispatch(fetchCitiesThunk(region.adminCode1));
  };

  const handleInputRegion = (e) => {
    setSelectedRegion(e);
    dispatch(updateCountry(e));
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
          onChange={(e) => handleInputRegion(e.target.value)}
          value={selectedRegion}
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
          selectElement={selectedRegion}
        />
      </div>
    </label>
  );
};
