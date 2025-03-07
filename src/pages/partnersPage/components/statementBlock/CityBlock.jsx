import { useDispatch, useSelector } from "react-redux";
import forselect from "../../../../assets/images/forselect.svg";
import { selectRegionsData } from "../../../../features/regions/RegionsSelector";
import { SelectList } from "../../../../shared/components/selectList/selectList";
import { useState } from "react";
import { updateCountry } from "../../../../features/regions/RegionsSlice";

export const CityBlock = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector(selectRegionsData);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    dispatch(updateCountry(country));
    setIsOpen(false);
  };

  const handleInputCountry = (e) => {
    setSelectedCountry(e);
    dispatch(updateCountry(e));
  };

  return (
    <label
      htmlFor=""
      className="statement-label-select"
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
    >
      Город*
      <div className="statement-cont-inp">
        <input
          className="statement-input-select"
          type="text"
          placeholder="Введите город"
          onChange={(e) => handleInputCountry(e.target.value)}
          value={selectedCountry}
        />
        <img
          src={forselect}
          alt=""
          className="statement-inp-img"
          onClick={() => setIsOpen(!isOpen)}
        />
        <SelectList
          list={countries}
          onSelect={handleSelectCountry}
          isOpen={isOpen}
          selectElement={selectedCountry}
        />
      </div>
    </label>
  );
};
