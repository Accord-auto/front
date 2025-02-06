import { useEffect, useState } from "react";
import { DropdownList } from "../../../../shared/components/dropdownList/DropdownList";
import { mapperProperties } from "../../../../shared/utils/mapperProperties.js";
import "./infoproductcomponent.css";
import { useNavigate } from "react-router-dom";

export const InfoProductComponent = ({ data }) => {
  const navigate = useNavigate();
  const isDiscount = data?.price?.discount !== 0;
  const isCount = data?.count > 0;
  const [textProperties, setTextProperties] = useState([]);

  useEffect(() => {
    if (data?.properties) {
      const mapper = mapperProperties(data.properties);
      console.log(mapper);
      setTextProperties(mapper);
    }
  }, [data]);

  const openBuyPage = () => {
    if (data.article) {
      navigate(`/buyproduct/${data?.article}`);
    } else {
      navigate("/buyproduct/none");
    }
  };

  return (
    <div className="info-product-container">
      <p className="info-product-name">{data.name}</p>
      <div className="info-product-cont-price">
        <p className="info-product-price">
          {isDiscount ? data.price?.discount : data.price?.value} Р
        </p>
        <p className="info-product-oldprice">
          {isDiscount ? `${data.price?.value} Р` : ""}
        </p>
      </div>
      <p className="info-product-brand">{data.brand}</p>
      {isCount ? (
        <button className="info-product-buy" onClick={openBuyPage}>
          Купить
        </button>
      ) : (
        <button disabled className="info-product-buy">
          Нет в наличии
        </button>
      )}
      <DropdownList btn="Характеристики" data={textProperties} />
      <DropdownList btn="Описание" data={data.description} />
    </div>
  );
};
