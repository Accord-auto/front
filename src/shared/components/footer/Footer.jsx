import "./footer.css";
import vk from "../../../assets/images/vk.svg";
import inst from "../../../assets/images/inst.svg";
import watsapp from "../../../assets/images/watsapp.svg";
import phone from "../../../assets/images/phone.svg";
import mail from "../../../assets/images/mail.svg";
import geo from "../../../assets/images/geo.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="foot-cont-main">
        <div className="foot-cont-1">
          <div className="foot-cont">
            <p className="foot-text">КАТАЛОГ</p>
            <p className="foot-text">СЕРВИСЫ</p>
            <p className="foot-text">ПАРТНЁРЫ</p>
          </div>
          <div className="foot-cont-1-2">
            <div className="foot-cont">
              <p className="foot-text">КОНТАКТЫ</p>
              <p className="foot-text">О НАС</p>
            </div>
            <div className="foot-cont">
              <img className="foot-img" src={vk} alt="" />
              <img className="foot-img" src={inst} alt="" />
              <img className="foot-img" src={watsapp} alt="" />
            </div>
          </div>
        </div>
        <div className="foot-cont-2">
          <a href="tel:+7-800-55-35-35" className="foot-a">
            <img src={phone} alt="" className="foot-img" />
            <span className="foot-a-text">8 800 55 35 35</span>
          </a>
          <a href="mailto:accord@yandex.ru" className="foot-a">
            <img src={mail} alt="" className="foot-img" />
            <span className="foot-a-text">accord@yandex.ru</span>
          </a>
          <a href="https://ekat.ithub.ru" className="foot-a">
            <img src={geo} alt="" className="foot-img" />
            <span className="foot-a-text">
              г. Екатеринбург, <br />
              ул. 8 марта,194В
            </span>
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
