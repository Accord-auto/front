import { useState } from "react";
import Modal from "../../../../shared/components/modal/Modal";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const apiURL = `${backendUrl}/photos`;

export const ArticleBlock = ({ elem, isBlack }) => {
  const [modalIsOpenT, setModalIsOpenT] = useState(false);

  return (
    <div
      className={`spoff-card ${isBlack ? "black-cont" : ""}`}
      onClick={() => setModalIsOpenT(true)}
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
      <Modal
        isOpen={modalIsOpenT}
        onClose={() => setModalIsOpenT(false)}
        children={elem}
      />
    </div>
  );
};
