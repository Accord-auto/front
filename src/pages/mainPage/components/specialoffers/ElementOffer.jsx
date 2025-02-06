import { useNavigate } from "react-router-dom";
import { Loader } from "../../../../shared/components/loader/Loader";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const apiURL = `${backendUrl}/photos`;

export const ElementOffer = ({ offer }) => {
  const navigate = useNavigate();
  if (!offer) {
    return <Loader />;
  }

  const openPage = () => {
    navigate(`/product/${offer.id}`);
  };
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
          <p className="offer-price">{offer?.price?.value}</p>
          <p className="offer-brand">{offer.brand}</p>
          <p className="offer-description">
            Описание товара: {offer.description}
          </p>
        </div>
        <div className="offer-element-main-btns">
          <button
            className="offer-element-btn offer-element-btn-buy "
            onClick={openPage}
          >
            Посмотреть
          </button>
        </div>
      </div>
    </div>
  );
};
