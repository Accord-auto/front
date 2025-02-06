import "./firstblock.css";
import { Header } from "../../../../shared/components/header/Header";

export const FirstBlock = () => {
  return (
    <div className="fb-container">
      <Header />
      <div className="fb-comp">
        <p className="fb-text">
          ВСЁ ДЛЯ ВАШЕГО АВТОМОБИЛЯ — <br />
          КАЧЕСТВО, НАДЁЖНОСТЬ, СТИЛЬ!
        </p>
        <div className="fb-btn-cont">
          <button className="fb-btn">ПЕРЕЙТИ К ПОКУПКАМ</button>
        </div>
      </div>
    </div>
  );
};
