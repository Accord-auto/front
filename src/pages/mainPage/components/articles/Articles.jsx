import "./articles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { Loader } from "../../../../shared/components/loader/Loader";
import { ErrorComponent } from "../../../../shared/components/errorComp/ErrorComponent";
import { DotsComponent } from "../../../../shared/components/dotsComponent/DotsComponent";
import { selectArticlesData } from "../../../../features/articles/articlesSelector";
import { fetchArticlesThunk } from "../../../../features/articles/articlesSlice";
import { ArticleBlock } from "./ArticleBlock";

export const Articles = () => {
  const dispatch = useDispatch();
  const { articles, status } = useSelector(selectArticlesData);
  const touchStartX = useRef(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    dispatch(fetchArticlesThunk());
  }, [dispatch]);

  const nextOffer = () => {
    setAnimation(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevOffer = () => {
    setAnimation(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + articles.length) % articles.length
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchStartX.current - touchEndX;

    if (swipeDistance > 50) {
      nextOffer();
    } else if (swipeDistance < -50) {
      prevOffer();
    }
  };

  const handleDotClick = (index) => {
    setAnimation(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (animation) {
      const timer = setTimeout(() => {
        setAnimation(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animation]);

  if (status === "loading") {
    return <Loader />;
  }
  if (status === "failed") {
    return <ErrorComponent text={"статьи"} />;
  }

  if (articles.length === 0) {
    return null;
  }

  return (
    <div className="spoff-main-container">
      <div className="spoff-container-title">
        <p className="spoff-title-1">Статьи</p>
        <p className="spoff-title-2">
          Мы собрали для вас различные статьи на самые актуальные и интересные
          темы.
        </p>
      </div>
      <div
        className="spoff-carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`side-card left ${animation ? "animate" : ""}`}
          onClick={prevOffer}
        >
          <ArticleBlock
            elem={
              articles[(currentIndex - 1 + articles.length) % articles.length]
            }
            isBlack={true}
          />
        </div>
        <div className={`side-main-card ${animation ? "animate" : ""}`}>
          <ArticleBlock elem={articles[currentIndex]} />
        </div>
        <div
          className={`side-card right ${animation ? "animate" : ""}`}
          onClick={nextOffer}
        >
          <ArticleBlock
            elem={articles[(currentIndex + 1) % articles.length]}
            isBlack={true}
          />
        </div>
      </div>
      <DotsComponent
        totalItems={articles.length}
        currentDot={currentIndex}
        onDotClick={handleDotClick}
      />
    </div>
  );
};
