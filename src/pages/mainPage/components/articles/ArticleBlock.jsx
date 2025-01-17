const apiURL = "http://10.3.24.115:8080/photos";
import { Loader } from "../../../../shared/components/loader/Loader";

export const ArticleBlock = ({ article, funcNext, funcPrev, showN, showP }) => {
  if (!article) {
    return <Loader />;
  }
  return (
    <div className="article-container">
      <div className="article-cont-photo">
        <img
          src={`${apiURL}/${article.photoUrl}`}
          alt=""
          className="article-photo"
        />
      </div>
      <div className="article-cont">
        <div className="article-info">
          <p className="article-title">{article.title}</p>
          <p className="article-description">{article.description}</p>
        </div>
        <div className="article-main-btns">
          <button className="article-btn">Подробнее</button>

          <div className="article-buttons-cont">
            <button
              disabled={showP}
              onClick={funcPrev}
              className="article-btn "
            >
              Назад
            </button>
            <button disabled={showN} onClick={funcNext} className="article-btn">
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
