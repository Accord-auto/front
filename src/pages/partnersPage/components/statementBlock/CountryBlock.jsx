import { useDispatch, useSelector } from "react-redux";
import { updateCountry } from "../../../../features/partnership/partnershipSlice";
import { selectPartnershipData } from "../../../../features/partnership/partnershipSelector";

export const CountryBlock = () => {
  const dispatch = useDispatch();
  const { partnership } = useSelector(selectPartnershipData);

  const handleInputCountry = (e) => {
    dispatch(updateCountry(e.target.value));
  };

  return (
    <label htmlFor="" className="statement-label-select">
      Страна*
      <div className="statement-cont-inp">
        <input
          className="statement-input-select"
          type="text"
          placeholder="Введите страну"
          onChange={(e) => handleInputCountry(e)}
          value={partnership.country}
        />
      </div>
    </label>
  );
};
