import "./miniproduct.css";
import fakeProduct from "../../../assets/images/fakeProduct.jpeg";

const apiURL = "http://10.3.24.115:8080/photos";
// ${apiURL}/${infoProduct.mainPhotoUrl}

export const MiniProduct = ({ infoProduct }) => {
  let price = 0;

  if (infoProduct.price.discount === 0) {
    price = infoProduct.price.value;
  } else {
    price = infoProduct.price.discount;
  }

  return (
    <div className="mini-product-container">
      <div className="mini-product-cont-photo">
        <img src={fakeProduct} alt="" className="mini-product-photo" />
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
