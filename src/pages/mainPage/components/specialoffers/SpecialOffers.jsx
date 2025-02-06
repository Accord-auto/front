import "./specialoffers.css";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../../shared/components/loader/Loader";
import { ErrorComponent } from "../../../../shared/components/errorComp/ErrorComponent";
import { ElementOffer } from "./ElementOffer";
import { selectOffersData } from "../../../../features/specialOffers/offersSelector";
import { fetchOffersThunk } from "../../../../features/specialOffers/offersSlice";

export const SpecialOffers = ({ onLoaded }) => {
  const dispatch = useDispatch();
  const { offers, status } = useSelector(selectOffersData);
  const [index, setIndex] = useState(0);
  const startX = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    dispatch(fetchOffersThunk());
  }, [dispatch]);

  const nextArticle = () => {
    setIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const prevArticle = () => {
    setIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextArticle, 5000);
    return () => clearInterval(intervalRef.current);
  }, [offers]);

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextArticle, 6000);
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
    <div className="offers-carousel">
      <div className="offers-cont">
        <div className="offers-text-cont">
          <p className="offers-title">Специальные предложения</p>
          <p className="offers-text" onClick={() => console.log(offers)}>
            Не упустите шанс: эксклюзивные предложения только для вас!
          </p>
        </div>
        <div
          onTouchStart={(e) => handleSwipeStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleSwipeMove(e.touches[0].clientX)}
          onMouseDown={(e) => handleSwipeStart(e.clientX)}
          onMouseMove={(e) => handleSwipeMove(e.clientX)}
          onMouseLeave={() => (startX.current = null)}
        >
          <ElementOffer offer={offers[index]} key={offers[index].id} />
        </div>
      </div>
    </div>
  );
};
