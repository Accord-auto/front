import { useDispatch, useSelector } from "react-redux";
import { selectPartnershipData } from "../../../../features/partnership/partnershipSelector";
import { updateCity } from "../../../../features/partnership/partnershipSlice";

export const CityBlock = () => {
  const dispatch = useDispatch();
  const { partnership } = useSelector(selectPartnershipData);

  const handleInputCity = (e) => {
    dispatch(updateCity(e.target.value));
  };

  return (
    <label htmlFor="" className="statement-label-select">
      Город*
      <div className="statement-cont-inp">
        <input
          className="statement-input-select"
          type="text"
          placeholder="Введите город"
          onChange={(e) => handleInputCity(e)}
          value={partnership.city}
        />
      </div>
    </label>
  );
};
