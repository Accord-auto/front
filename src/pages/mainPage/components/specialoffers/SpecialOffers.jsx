import "./specialoffers.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../../shared/components/loader/Loader";
import { ErrorComponent } from "../../../../shared/components/errorComp/ErrorComponent";
import { ElementOffer } from "./ElementOffer";
import { selectOffersData } from "../../../../features/specialOffers/offersSelector";
import { fetchOffersThunk } from "../../../../features/specialOffers/offersSlice";

export const SpecialOffers = () => {
  const dispatch = useDispatch();
  const { offers, status } = useSelector(selectOffersData);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchOffersThunk());
  }, [dispatch]);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <ErrorComponent text={"специальные предложения"} />;
  }

  if (offers.length === 0) {
    return (
      <div className="error-comp">
        Здесь можно будет посмотреть
        <br /> специальные предложения,
        <br /> заходите позже!
      </div>
    );
  }

  const handleNext = () => {
    if (currentIndex < offers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isNextDisabled = currentIndex >= offers.length - 1;
  const isPrevDisabled = currentIndex <= 0;

  return (
    <div className="offers-carousel">
      <div className="offers-cont">
        <div className="offers-text-cont">
          <p className="offers-title">Специальные предложения</p>
          <p className="offers-text" onClick={() => console.log(offers)}>
            Не упустите шанс: эксклюзивные предложения только для вас!
          </p>
        </div>
        <ElementOffer
          offer={offers[currentIndex]}
          funcNext={handleNext}
          funcPrev={handlePrev}
          showN={isNextDisabled}
          showP={isPrevDisabled}
        />
      </div>
    </div>
  );
};
