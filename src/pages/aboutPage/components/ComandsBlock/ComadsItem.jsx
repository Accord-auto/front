import inst from "../../../../assets/images/inst.svg";
import vk from "../../../../assets/images/vk.svg";
import watsapp from "../../../../assets/images/watsapp.svg";

export const ComandsItem = ({ person }) => {
  return (
    <div className="comands-item">
      <div className="person-photo-cont">
        <img className="person-photo" src={person.img} alt="photo" />
      </div>
      <div className="person-info">
        <div className="person-title">
          <p className="person-name">{person.name}</p>
          <p className="person-job">{person.jobTitle}</p>
        </div>

        <p className="person-desc">{person.description}</p>
        <div className="person-cont-svg">
          <img className="person-svg" src={vk} alt="" />
          <img className="person-svg" src={inst} alt="" />
          <img className="person-svg" src={watsapp} alt="" />
        </div>
      </div>
    </div>
  );
};
