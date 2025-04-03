import "./firstblock.css";
import { Header } from "../../../../shared/components/header/Header";
import { useNavigate } from "react-router-dom";

export const FirstBlock = () => {
  const navigate = useNavigate();
  return (
    <div className="fb-container">
      <Header />
      <div className="fb-comp">
        <p className="fb-text">
          ВСЁ ДЛЯ ВАШЕГО АВТОМОБИЛЯ — <br />
          КАЧЕСТВО, НАДЁЖНОСТЬ, СТИЛЬ!
        </p>
        <div className="fb-btn-cont">
          <button className="fb-btn" onClick={() => navigate("/user/catalog")}>
            ПЕРЕЙТИ К ПОКУПКАМ
          </button>
        </div>
      </div>
    </div>
  );
};
