import { useNavigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const apiURL = `${backendUrl}/photos`;

export const ElementOffer = ({ elem, isBlack }) => {
  const navigate = useNavigate();

  const openPage = () => {
    navigate(`/product/${elem.id}`);
  };

  return (
    <div
      className={`spoff-card ${isBlack ? "black-cont" : ""}`}
      onClick={openPage}
    >
      <div className="spoff-card-cont">
        <img
          src={`${apiURL}/${elem?.mainPhotoUrl}`}
          alt="photo"
          className="spoff-card-img"
        />
      </div>
      <div className="spoff-card-content">
        <p className="spoff-card-name">{elem?.name}</p>
        <div className="spoff-card-cont-price">
          <p className="spoff-card-price">{elem?.price.value} Р</p>
          <p className="spoff-card-discount">{elem?.price.discount} Р</p>
        </div>
        <p className="spoff-card-brand">{elem?.brand}</p>
      </div>
      <button className="spoff-card-btn">Подробнее</button>
    </div>
  );
};
