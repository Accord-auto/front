const backendUrl = import.meta.env.VITE_BACKEND_URL;

const apiURL = `${backendUrl}/photos`;

import { Loader } from "../../../../shared/components/loader/Loader";

export const ElementOffer = ({ offer, funcNext, funcPrev, showN, showP }) => {
  if (!offer) {
    return <Loader />;
  }
  return (
    <div className="offer-element-container">
      <div className="offer-element-cont-photo">
        <img
          src={`${apiURL}/${offer.mainPhotoUrl}`}
          alt=""
          className="offer-element-photo"
        />
      </div>
      <div className="offer-element-cont">
        <div className="offer-info">
          <p className="offer-title">{offer.name}</p>
          <p className="offer-price">{offer.price.value} Р</p>
          <p className="offer-brand">{offer.brand}</p>
          <p className="offer-description">
            Описание товара: {offer.description}
          </p>
        </div>
        <div className="offer-element-main-btns">
          <button className="offer-element-btn offer-element-btn-buy ">
            Купить
          </button>
          <button className="offer-element-btn">Подробнее</button>

          <div className="offer-element-buttons-cont">
            <button
              disabled={showP}
              onClick={funcPrev}
              className="offer-element-btn "
            >
              Назад
            </button>
            <button
              disabled={showN}
              onClick={funcNext}
              className="offer-element-btn"
            >
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
