import { useDispatch, useSelector } from "react-redux";
import forselect from "../../../../assets/images/forselect.svg";
import { selectRegionsData } from "../../../../features/regions/RegionsSelector";
import { SelectList } from "../../../../shared/components/selectList/selectList";
import { useState } from "react";
import { updateCity } from "../../../../features/regions/RegionsSlice";

export const CityBlock = () => {
  const dispatch = useDispatch();
  const { cities } = useSelector(selectRegionsData);
  const [selectedCity, setSelectedCity] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectCity = (city) => {
    setSelectedCity(city.name);
    dispatch(updateCity(city.name));
    setIsOpen(false);
  };

  const handleInputCity = (e) => {
    setSelectedCity(e);
    dispatch(updateCity(e));
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
          onChange={(e) => handleInputCity(e.target.value)}
          value={selectedCity}
        />
        <img
          src={forselect}
          alt=""
          className="statement-inp-img"
          onClick={() => setIsOpen(!isOpen)}
        />
        <SelectList
          list={cities.geonames}
          onSelect={handleSelectCity}
          isOpen={isOpen}
          selectElement={selectedCity}
        />
      </div>
    </label>
  );
};
