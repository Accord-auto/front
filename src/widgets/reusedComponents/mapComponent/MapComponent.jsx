import "./mapcomponent.css";
import { useEffect, useRef, useState } from "react";
import { initializeMap, loadYandexMaps } from "../../../shared/utils/geocoder";

export default function MapComponent({ list }) {
  // const [activeBtn, setActiveBtn] = useState(false);
  const mapContainer = useRef(null);
  console.log(list);
  if (!list || list.length === 0) {
    return null;
  }

  useEffect(() => {
    const loadMap = async () => {
      try {
        const ymaps = await loadYandexMaps();
        initializeMap(ymaps, mapContainer.current, list);
      } catch (error) {
        console.error("Ошибка при загрузке карты:", error);
      }
    };

    loadMap();
  }, [list]);

  return (
    <div className="map-container">
      {/* <div
        className={`map-cont ${activeBtn ? "map-cont-active" : ""}`}
        onClick={() => setActiveBtn(!activeBtn)}
      >
        {list.map(({ id, name, address, contacts }) => (
          <div
            key={id}
            className={`map-block ${activeBtn ? "map-block-active" : ""}`}
          >
            <p
              className={`map-block-name ${
                activeBtn ? "map-block-name-active" : ""
              }`}
            >
              {name}
            </p>
            <p
              className={`map-block-info ${
                activeBtn ? "map-block-info-active" : ""
              }`}
            >
              {address?.state}, {address?.city}, {address?.street},{" "}
              {address?.zipCode} <br />
              {contacts[0]?.phoneNumber}
            </p>
          </div>
        ))}
      </div> */}
      <div ref={mapContainer} className="map" />
    </div>
  );
}
