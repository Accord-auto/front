import "./mapcomponent.css";
import { useEffect, useRef, useState } from "react";
import { points } from "../../../shared/consts/pointsForMap";

const ykey = import.meta.env.VITE_YANDEX_MAP_API_KEY;

export default function MapComponent({ list }) {
  const [activeBtn, setActiveBtn] = useState(false);
  const mapContainer = useRef(null);
  console.log(list);

  if (!list || list.length === 0) {
    console.log(list);
    return null;
  }

  useEffect(() => {
    const loadMap = () => {
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map(mapContainer.current, {
          center: points.length > 0 ? points[0] : [56.838011, 60.597474],
          zoom: 14,
          controls: [],
        });

        points.forEach((coords) => {
          const placemark = new window.ymaps.Placemark(
            coords,
            {},
            {
              preset: "islands#redDotIcon",
            }
          );
          map.geoObjects.add(placemark);
        });
      });
    };

    if (window.ymaps) {
      loadMap();
    } else {
      const apiYMap = document.createElement("script");
      apiYMap.src = `https://api-maps.yandex.ru/2.1?apikey=${ykey}&lang=ru_RU`;
      apiYMap.onload = loadMap;
      document.body.appendChild(apiYMap);
    }
  }, [ykey]);

  return (
    <div className="map-container">
      <div
        className={`map-cont ${activeBtn ? "map-cont-active" : ""}`}
        onClick={() => setActiveBtn(!activeBtn)}
      >
        {list.map((element) => (
          <div
            key={element.id}
            className={`map-block ${activeBtn ? "map-block-active" : ""}`}
          >
            <p
              className={`map-block-name ${
                activeBtn ? "map-block-name-active" : ""
              }`}
            >
              {element.name}
            </p>

            <p
              className={`map-block-info ${
                activeBtn ? "map-block-info-active" : ""
              }`}
            >
              {element.address?.state}, {element.address?.city},{" "}
              {element.address?.street}, {element.address?.zipCode} <br />
              {element.contacts[0]?.phoneNumber}
            </p>
          </div>
        ))}
      </div>
      <div
        ref={mapContainer}
        className={`map ${activeBtn ? "map-active" : ""}`}
      />
    </div>
  );
}
