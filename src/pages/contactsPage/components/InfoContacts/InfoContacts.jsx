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
        <img src={telegram} alt="telegram" className="info-contacts-img-big" />
        <img src={whapp} alt="whatsapp" className="info-contacts-img-big" />
      </div>
      <div className="info-contacts-cont-market">
        <p className="info-contacts-title-market">Купить на маркетплейсе</p>
        <div className="info-contacts-cont-imgs-2">
          <img src={ozon} alt="telegram" className="info-contacts-img" />
          <img src={wb} alt="whatsapp" className="info-contacts-img" />
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
