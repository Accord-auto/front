import "./mapcomponent.css";
import { useEffect, useRef, useState } from "react";
import { initializeMap, loadYandexMaps } from "../../../shared/utils/geocoder";

export default function MapComponent({ list }) {
  const mapContainer = useRef(null);
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
        return null;
      }
    };

    loadMap();
  }, [list]);

  return (
    <div className="map-container">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
