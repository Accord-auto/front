import "./scrollblock.css";
import honda from "../../../../assets/images/honda.svg";
import toyota from "../../../../assets/images/toyota.svg";
import hyundai from "../../../../assets/images/hyundai.svg";
import bmw from "../../../../assets/images/bmw.svg";
import kia from "../../../../assets/images/kia.svg";
import mitsubishi from "../../../../assets/images/mitsubishi.svg";
import tesla from "../../../../assets/images/tesla.svg";
import nissan from "../../../../assets/images/nissan.svg";

export const ScrollBlock = () => {
  return (
    <div className="logos">
      {Array(3)
        .fill(null)
        .map(() => (
          <div className="logos-slide">
            <img src={honda} />
            <img src={toyota} />
            <img src={nissan} />
            <img src={tesla} />
            <img src={mitsubishi} />
            <img src={kia} />
            <img src={hyundai} />
            <img src={bmw} />
          </div>
        ))}
    </div>
  );
};
