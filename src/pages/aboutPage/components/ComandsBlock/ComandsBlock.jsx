import "./comandsblock.css";
import { infoComands } from "../../../../shared/utils/infoAboutComands";
import { ComandsItem } from "./ComadsItem";

export const ComandsBlock = () => {
  return (
    <>
      <p className="comands-title">Команда</p>
      <div className="comands-container">
        {infoComands.map((person) => (
          <ComandsItem person={person} />
        ))}
      </div>
    </>
  );
};
