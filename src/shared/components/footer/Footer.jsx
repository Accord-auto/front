import "./footer.css";
import phone from "../../../assets/images/phone.svg";
import mail from "../../../assets/images/mail.svg";
import geo from "../../../assets/images/geo.svg";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <hr />
      <div className="foot-cont-main">
        <div className="foot-cont-1">
          <div className="foot-cont">
            <p className="foot-text" onClick={() => navigate("/catalog")}>
              КАТАЛОГ
            </p>
            <p className="foot-text" onClick={() => navigate("/partners")}>
              ПАРТНЁРЫ
            </p>
          </div>
          <div className="foot-cont-1-2">
            <div className="foot-cont">
              <p className="foot-text" onClick={() => navigate("/contacts")}>
                КОНТАКТЫ
              </p>
              <p className="foot-text" onClick={() => navigate("/about")}>
                О НАС
              </p>
            </div>
          </div>
        </div>
        <div className="foot-cont-2">
          <a href="tel:+7-343-222-01-22" className="foot-a">
            <img src={phone} alt="" className="foot-img" />
            <span className="foot-a-text">7 343 222 01 22</span>
          </a>
          <a href="mailto:store@accordcompany.ru" className="foot-a">
            <img src={mail} alt="" className="foot-img" />
            <span className="foot-a-text">store@accordcompany.ru</span>
          </a>
        </div>
        <div className="foot-cont-3">
          <p className="foot-brand">АККОРД</p>
        </div>
      </div>
      <hr />
      <div className="foot-cont-law">
        <p className="foot-text-2">© 2025 Все права защищены</p>
        <p className="foot-text-2">ПОЛИТИКА КОНФЕДЕНЦИАЛЬНОСТИ</p>
      </div>
    </footer>
  );
};
