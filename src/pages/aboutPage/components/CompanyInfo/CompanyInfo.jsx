import { infoBlocks } from "../../../../shared/utils/infoBlocks";
import "./companyinfo.css";

export const CompanyInfo = () => {
  return (
    <div className="block-partners-container ba-container">
      {infoBlocks.map((block, i) => (
        <div className="block-partners-cont" key={i}>
          <img src={block.img} alt="" className="block-partners-img" />
          <p className="block-partners-text ba-title">{block.name}</p>
          <p className="block-partners-text ba-text">{block.description}</p>
        </div>
      ))}
    </div>
  );
};
