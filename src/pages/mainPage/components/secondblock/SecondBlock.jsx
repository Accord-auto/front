import "./secondblock.css";
import line from "../../../../assets/images/line.svg";
import { infoCompany } from "../../../../shared/utils/infoAboutCompany";
import { useEffect, useState } from "react";

export const SecondBlock = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const firstInfoBlock = infoCompany.slice(0, 2);
  const secondInfoBlock = infoCompany.slice(2, 4);

  return (
    <>
      {width >= 769 ? (
        <div className="block-info-cont">
          <div className="block-info-1">
            {firstInfoBlock.map((block) => (
              <div className="block-cont" key={block.name}>
                <img src={block.img} alt="" className="block-img" />
                <div className="block-text">
                  <p className="block-name">{block.name}</p>
                  <p className="block-description">{block.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="block-line-wrapper">
            <img src={line} alt="line" className="block-line" />
          </div>
          <div className="block-info-2">
            {secondInfoBlock.map((block) => (
              <div className="block-cont" key={block.name}>
                <img src={block.img} alt="" className="block-img" />
                <div className="block-text">
                  <p className="block-name">{block.name}</p>
                  <p className="block-description">{block.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="block-info-cont">
          <div className="block-info">
            {infoCompany.map((block) => (
              <div className="block-cont" key={block.name}>
                <img src={block.img} alt="" className="block-img" />
                <div className="block-text">
                  <p className="block-name">{block.name}</p>
                  <p className="block-description">{block.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="block-line-wrapper">
            <img src={line} alt="line" className="block-line" />
          </div>
        </div>
      )}
    </>
  );
};
