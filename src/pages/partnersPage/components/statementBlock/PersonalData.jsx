import { useDispatch, useSelector } from "react-redux";
import { selectPartnershipData } from "../../../../features/partnership/partnershipSelector";
import {
  updateEmail,
  updateFullName,
  updateNumberPhone,
} from "../../../../features/partnership/partnershipSlice";

export const PersonalData = () => {
  const { partnership } = useSelector(selectPartnershipData);
  const dispatch = useDispatch();
  return (
    <>
      <p className="statement-title">Ваши данные</p>

      <div className="statement-data-container">
        <label htmlFor="" className="statement-label">
          ФИО*
          <input
            className="statement-input"
            type="text"
            placeholder="Крид Егор Николаевич"
            value={partnership.fullName}
            onChange={(e) => dispatch(updateFullName(e.target.value))}
          />
        </label>
        <label htmlFor="" className="statement-label">
          Номер телефона*
          <input
            className="statement-input"
            type="number"
            placeholder="8XXXXXXXXXX"
            value={partnership.numberPhone}
            onChange={(e) => dispatch(updateNumberPhone(e.target.value))}
          />
        </label>
        <label htmlFor="" className="statement-label">
          E-mail*
          <input
            className="statement-input"
            type="text"
            placeholder="IvanIvanov@gmail.com"
            value={partnership.email}
            onChange={(e) => dispatch(updateEmail(e.target.value))}
          />
        </label>
      </div>
    </>
  );
};
