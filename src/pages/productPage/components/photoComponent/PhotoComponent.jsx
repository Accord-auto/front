import { useState } from "react";
import "./photocomponent.css";
import left from "../../../../assets/images/left.svg";
import right from "../../../../assets/images/right.svg";
import { backendUrl } from "../../../../shared/consts/api";

const apiURL = `${backendUrl}/photos`;

export const PhotoComponent = ({ mainPhoto, additionalPhotos = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const listPhotos = [
    `${apiURL}/${mainPhoto}`,
    ...additionalPhotos?.map((photo) => `${apiURL}/${photo}`),
  ];

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev === 0 ? listPhotos.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev === listPhotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="photos-container">
      <div className="photos-slider">
        <img
          src={listPhotos[currentIndex]}
          alt="Photo"
          className="photo-slide"
        />
        <img
          src={left}
          alt=""
          className="photos-btn photos-btn-prev"
          onClick={prevPhoto}
        />
        <img
          src={right}
          alt=""
          className="photos-btn photos-btn-next"
          onClick={nextPhoto}
        />
      </div>
      <div className="photos-dots">
        {listPhotos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`photos-dot ${
              currentIndex === index ? "active-dot" : ""
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
