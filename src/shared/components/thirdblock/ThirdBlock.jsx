import "./thirdblock.css";

export const ThirdBlock = ({ colorText }) => {
  return (
    <div className="numbers-container" style={{ color: colorText }}>
      <div className="numbers-cont">
        <p className="numbers-title">26+</p>
        <p className="numbers-text">Крупных партнёров</p>
      </div>
      <div className="numbers-cont">
        <p className="numbers-title">15+</p>
        <p className="numbers-text">Более 15 лет на рынке</p>
      </div>
      <div className="numbers-cont">
        <p className="numbers-title">600+</p>
        <p className="numbers-text">Счастливых клиентов</p>
      </div>
    </div>
  );
};
