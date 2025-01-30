import { partnersInfo } from "../../../../shared/utils/partnersInfo";
import "./blockpartners.css";

export const BlockPartners = () => {
  return (
    <div className="block-partners-container">
      {partnersInfo.map((partner) => (
        <div className="block-partners-cont">
          <img src={partner.img} alt="" className="block-partners-img" />
          <p className="block-partners-text">{partner.name}</p>
        </div>
      ))}
    </div>
  );
};
