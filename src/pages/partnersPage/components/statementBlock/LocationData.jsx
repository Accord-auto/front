import "./locationData.css";
import { CountryBlock } from "./CountryBlock";
import { RegionBlock } from "./RegionBlock";
import { CityBlock } from "./CityBlock";

export const LocationData = () => {
  return (
    <>
      <p className="statement-title">Расположение</p>
      <div className="statement-data-container">
        <CountryBlock />
        <RegionBlock />
        <CityBlock />
      </div>
    </>
  );
};
