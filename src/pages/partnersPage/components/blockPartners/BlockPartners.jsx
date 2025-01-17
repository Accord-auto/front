import "./blockpartners.css";
import chelikPartner from "../../../../assets/images/chelikPartner.svg";
import checklistPartner from "../../../../assets/images/checklistPartner.svg";
import discountPartner from "../../../../assets/images/discountPartner.svg";
import risePartner from "../../../../assets/images/risePartner.svg";

export const BlockPartners = () => {
  return (
    <div className="block-partners-container">
      <div className="block-partners-cont">
        <img src={chelikPartner} alt="" className="block-partners-img" />
        <p className="block-partners-text">
          Техническая поддержка и консультация
        </p>
      </div>
      <div className="block-partners-cont">
        <img src={checklistPartner} alt="" className="block-partners-img" />
        <p className="block-partners-text">Большой ассортимент товаров</p>
      </div>
      <div className="block-partners-cont">
        <img src={discountPartner} alt="" className="block-partners-img" />
        <p className="block-partners-text">Скидки и специальные предложения</p>
      </div>
      <div className="block-partners-cont">
        <img src={risePartner} alt="" className="block-partners-img" />
        <p className="block-partners-text">Высокая эффективность материалов</p>
      </div>
    </div>
  );
};
