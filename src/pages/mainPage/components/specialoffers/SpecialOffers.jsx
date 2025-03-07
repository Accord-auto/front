import { useDispatch, useSelector } from "react-redux";
import { ElementOffer } from "./ElementOffer";
import "./specialoffers.css";
import { selectOffersData } from "../../../../features/specialOffers/offersSelector";
import { useEffect, useRef, useState } from "react";

import { fetchOffersThunk } from "../../../../features/specialOffers/offersSlice";
import { Loader } from "../../../../shared/components/loader/Loader";
import { ErrorComponent } from "../../../../shared/components/errorComp/ErrorComponent";
import { DotsComponent } from "../../../../shared/components/dotsComponent/DotsComponent";

export const SpecialOffers = () => {
  const dispatch = useDispatch();
  const { offers, status } = useSelector(selectOffersData);
  const touchStartX = useRef(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    dispatch(fetchOffersThunk());
  }, [dispatch]);

  const nextOffer = () => {
    setAnimation(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const prevOffer = () => {
    setAnimation(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + offers.length) % offers.length
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

  // if (status === "successfully") {
  //   onLoaded();
  // }

  if (status === "failed") {
    return <ErrorComponent text={"специальные предложения"} />;
  }

  if (offers.length === 0) {
    return null;
  }

  return (
    <div className="spoff-main-container">
      <div className="spoff-container-title">
        <p className="spoff-title-1">Специальные предложения</p>
        <p className="spoff-title-2">
          Не упусти шанс: эксклюзивные предложения только для вас!
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
          <ElementOffer
            elem={offers[(currentIndex - 1 + offers.length) % offers.length]}
            isBlack={true}
          />
        </div>
        <div className={`side-main-card ${animation ? "animate" : ""}`}>
          <ElementOffer elem={offers[currentIndex]} />
        </div>
        <div
          className={`side-card right ${animation ? "animate" : ""}`}
          onClick={nextOffer}
        >
          <ElementOffer
            elem={offers[(currentIndex + 1) % offers.length]}
            isBlack={true}
          />
        </div>
      </div>
      <DotsComponent
        totalItems={offers.length}
        currentDot={currentIndex}
        onDotClick={handleDotClick}
      />
    </div>
  );
};
