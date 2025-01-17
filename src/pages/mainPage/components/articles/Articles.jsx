import "./articles.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectArticlesData } from "../../../../features/articles/articlesSelector";
import { fetchArticlesThunk } from "../../../../features/articles/articlesSlice";
import { ArticleBlock } from "./ArticleBlock";
import { Loader } from "../../../../shared/components/loader/Loader";
import { ErrorComponent } from "../../../../shared/components/errorComp/ErrorComponent";

export const Articles = () => {
  const dispatch = useDispatch();
  const { articles, status } = useSelector(selectArticlesData);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchArticlesThunk());
  }, [dispatch]);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <ErrorComponent text={"статьи"} />;
  }

  if (articles.length === 0) {
    return (
      <div className="error-comp">
        Здесь можно будет посмотреть статьи,
        <br />
        заходите позже!
      </div>
    );
  }

  const handleNext = () => {
    if (currentIndex < articles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isNextDisabled = currentIndex >= articles.length - 1;
  const isPrevDisabled = currentIndex <= 0;

  return (
    <div className="articles-carousel">
      <div className="carousel-cont">
        <div className="carousel-text-cont">
          <p className="carousel-title">Статьи</p>
          <p className="carousel-text">
            Мы собрали для вас различные статьи на самые актуальные и интересные
            темы.
          </p>
        </div>
        <ArticleBlock
          article={articles[currentIndex]}
          funcNext={handleNext}
          funcPrev={handlePrev}
          showN={isNextDisabled}
          showP={isPrevDisabled}
        />
      </div>
    </div>
  );
};
