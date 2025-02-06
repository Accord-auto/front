import { useState, useEffect } from "react";
import { Loader } from "../../../../shared/components/loader/Loader";
import Modal from "../../../../shared/components/modal/Modal";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const apiURL = `${backendUrl}/photos`;

export const ArticleBlock = ({ article, setIsModalOpen }) => {
  const [modalIsOpenT, setModalIsOpenT] = useState(false);

  useEffect(() => {
    setIsModalOpen(modalIsOpenT);
  }, [modalIsOpenT]);

  if (!article) {
    return <Loader />;
  }
  return (
    <div className="offer-element-container">
      <div className="offer-element-cont-photo">
        <img
          src={`${apiURL}/${article.photoUrl}`}
          alt=""
          className="offer-element-photo"
        />
      </div>
      <div className="offer-element-cont">
        <div className="offer-info">
          <p className="offer-title">{article.title}</p>
          <p className="offer-description">{article.description}</p>
        </div>
        <div className="offer-element-main-btns">
          <button
            className="offer-element-btn offer-element-btn-buy "
            onClick={() => setModalIsOpenT(true)}
          >
            Подробнее
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpenT}
        onClose={() => setModalIsOpenT(false)}
        children={article}
      />
    </div>
  );
};
