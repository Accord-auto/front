import { useNavigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const apiURL = `${backendUrl}/photos`;

export const ArticleBlock = ({ elem, isBlack }) => {
  const navigate = useNavigate();

  const openPage = () => {
    navigate(`/user/product/${elem.id}`);
  };

  return (
    <div
      className={`spoff-card ${isBlack ? "black-cont" : ""}`}
      onClick={openPage}
    >
      <div className="spoff-card-cont">
        <img
          src={`${apiURL}/${elem?.photoUrl}`}
          alt="photo"
          className="spoff-card-img"
        />
      </div>
      <div className="spoff-card-content">
        <p className="article-card-name">{elem?.title}</p>
      </div>
      <button className="spoff-card-btn">Подробнее</button>
    </div>
  );
};
