import "./miniproduct.css";
import { useNavigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const apiURL = `${backendUrl}/photos`;

export const MiniProduct = ({ infoProduct }) => {
  const navigate = useNavigate();
  let price = 0;

  if (infoProduct.price.discount === 0) {
    price = infoProduct.price.value;
  } else {
    price = infoProduct.price.discount;
  }

  const openPage = () => {
    navigate(`/product/${infoProduct.id}`);
  };

  return (
    <div className="mini-product-container" onClick={openPage}>
      <div className="mini-product-cont-photo">
        <img
          src={`${apiURL}/${infoProduct.mainPhotoUrl}`}
          alt=""
          className="mini-product-photo"
        />
      </div>
      <div className="mini-product-cont-info">
        <p className="mini-product-category">{infoProduct.brand}</p>
        <p className="mini-product-name">{infoProduct.name}</p>
      </div>
      <div className="mini-product-cont-price">
        <p className="mini-product-price">{price} Р</p>
      </div>
    </div>
  );
};
