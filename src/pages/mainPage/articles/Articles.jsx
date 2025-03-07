import "./articles.css";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectArticlesData } from "../../../features/articles/articlesSelector";
import { fetchArticlesThunk } from "../../../features/articles/articlesSlice";
import { ArticleBlock } from "./ArticleBlock";
import { Loader } from "../../../shared/components/loader/Loader";
import { ErrorComponent } from "../../../shared/components/errorComp/ErrorComponent";

export const Articles = ({ onLoaded }) => {
  const dispatch = useDispatch();
  const { articles, status } = useSelector(selectArticlesData);
  const [index, setIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const startX = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    dispatch(fetchArticlesThunk());
  }, [dispatch]);

  const nextArticle = () => {
    setIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevArticle = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + articles.length) % articles.length
    );
  };

  useEffect(() => {
    if (!modalIsOpen) {
      intervalRef.current = setInterval(nextArticle, 5000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [modalIsOpen, articles]);

  const resetTimer = () => {
    if (!modalIsOpen) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(nextArticle, 6000);
    }
  };

  const handleSwipeStart = (clientX) => {
    startX.current = clientX;
    resetTimer();
  };

  const handleSwipeMove = (clientX) => {
    if (!startX.current) return;
    const diff = startX.current - clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextArticle();
      else prevArticle();
      startX.current = null;
    }
  };

  if (status === "loading") {
    console.log("super");

    return <Loader />;
  }

  // if (status === "successfully") {
  //   onLoaded();
  // }

  if (status === "failed") {
    return <ErrorComponent text={"статьи"} />;
  }

  if (articles.length === 0) {
    return null;
  }

  return (
    <div className="offers-carousel articles-carousel">
      <div className="offers-cont">
        <div className="offers-text-cont">
          <p className="offers-title">Статьи</p>
          <p className="offers-text" onClick={() => console.log(offers)}>
            Мы собрали для вас различные статьи на самые актуальные и интересные
            темы.
          </p>
        </div>
        <div
          onTouchStart={(e) => handleSwipeStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleSwipeMove(e.touches[0].clientX)}
          onMouseDown={(e) => handleSwipeStart(e.clientX)}
          onMouseMove={(e) => handleSwipeMove(e.clientX)}
          onMouseLeave={() => (startX.current = null)}
        >
          <ArticleBlock
            article={articles[index]}
            setIsModalOpen={setModalIsOpen}
          />
        </div>
      </div>
    </div>
  );
};
