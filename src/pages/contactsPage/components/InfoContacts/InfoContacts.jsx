import "./infocontacts.css";
import telegram from "../../../../assets/images/telegram.svg";
import whapp from "../../../../assets/images/whapp.svg";
import ozon from "../../../../assets/images/ozon.svg";
import wb from "../../../../assets/images/wb.svg";
import azbuka from "../../../../assets/images/azbuka.svg";

export const InfoContacts = () => {
  return (
    <div className="info-contacts-container">
      <p className="info-contacts-title">Купить через мессенджер</p>
      <div className="info-contacts-cont-imgs">
        <a href="https://t.me/abcxcz" target="_blank" rel="noopener noreferrer">
          <img
            src={telegram}
            alt="telegram"
            className="info-contacts-img-big"
          />
        </a>
        <a
          href="https://wa.me/73432220122?text=Здравствуйте!%20Нашел%20вас%20через%20сайт.%20Хочу%20оформить%20заказ."
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whapp} alt="whatsapp" className="info-contacts-img-big" />
        </a>
      </div>
      <div className="info-contacts-cont-market">
        <p className="info-contacts-title-market">Купить на маркетплейсе</p>
        <div className="info-contacts-cont-imgs-2">
          <a
            href="https://www.ozon.ru/seller/multishum-1412381/products/?miniapp=seller_1412381"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ozon} alt="ozon" className="info-contacts-img" />
          </a>
          <a
            href="https://www.wildberries.ru/seller/1304761"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={wb} alt="wildberries" className="info-contacts-img" />
          </a>
        </div>
      </div>
      <div className="info-contacts-cont-market">
        <p className="info-contacts-title-market">Магазины-партнёры</p>
        <div className="info-contacts-cont-imgs-2">
          <img src={azbuka} alt="telegram" className="info-contacts-img-2" />
          <p className="info-contacts-accord">АККОРД</p>
        </div>
      </div>
    </div>
  );
};
