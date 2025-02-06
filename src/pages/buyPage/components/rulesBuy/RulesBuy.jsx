import "./rulesbuy.css";
import telegram from "../../../../assets/images/telegram.svg";
import whapp from "../../../../assets/images/whapp.svg";
import ozon from "../../../../assets/images/ozon.svg";
import wb from "../../../../assets/images/wb.svg";
import azbuka from "../../../../assets/images/azbuka.svg";

export const RulesBuy = ({ article }) => {
  return (
    <div className="howbuy-container">
      <div className="howbuy-cont">
        <p className="howbuy-message">Купить через мессенджер</p>
        <div className="howbuy-cont-img">
          <img src={telegram} alt="telegram" className="howbuy-img-big" />
          <img src={whapp} alt="whatsapp" className="howbuy-img-big" />
        </div>
      </div>
      <div className="howbuy-cont">
        <p className="howbuy-text">Купить на маркетплейсе</p>
        <div className="howbuy-cont-img">
          <img src={ozon} alt="telegram" className="howbuy-img" />
          <img src={wb} alt="whatsapp" className="howbuy-img" />
        </div>
      </div>
      <div className="howbuy-cont">
        <p className="howbuy-text">Установочные центры</p>
        <div className="howbuy-cont-img">
          <img src={azbuka} alt="telegram" className="howbuy-img" />
          <p className="howbuy-accord">АККОРД</p>
        </div>
      </div>
    </div>
  );
};
