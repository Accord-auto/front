import { useDispatch, useSelector } from "react-redux";
import { ActivityBlock } from "./ActivityBlock";
import { selectPartnershipData } from "../../../../features/partnership/partnershipSelector";
import {
  updateLink,
  updateMessage,
} from "../../../../features/partnership/partnershipSlice";

export const ActivityData = () => {
  const dispatch = useDispatch();
  const { partnership } = useSelector(selectPartnershipData);
  return (
    <>
      <p className="statement-title">Деятельность</p>

      <div className="statement-data-container">
        <ActivityBlock />
        <label htmlFor="" className="statement-label">
          Ссылка на сайт компании
          <input
            className="statement-input"
            type="text"
            placeholder="Добавьте ссылку"
            value={partnership.link}
            onChange={(e) => dispatch(updateLink(e.target.value))}
          />
        </label>
        <label htmlFor="" className="statement-label">
          Сообщение*
          <input
            className="statement-input"
            type="text"
            placeholder="Введите ваше сообщение"
            value={partnership.message}
            onChange={(e) => dispatch(updateMessage(e.target.value))}
          />
        </label>
      </div>
    </>
  );
};
