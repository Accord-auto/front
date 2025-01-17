import { ActivityData } from "./ActivityData";
import { LocationData } from "./LocationData";
import { PersonalData } from "./PersonalData";
import "./statementblock.css";

export const StatementBlock = () => {
  return (
    <form className="statement-container">
      <PersonalData />
      <LocationData />
      <ActivityData />
      <label className="statement-cont-check">
        <input type="checkbox" placeholder="" className="statement-check" />
        <p className="statement-check-text">
          Согласен на обработку{" "}
          <span className="statement-check-text-span">персональных данных</span>
        </p>
      </label>
      <button className="statement-btn">Принять</button>
    </form>
  );
};
