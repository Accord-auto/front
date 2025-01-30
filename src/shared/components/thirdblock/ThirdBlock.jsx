import "./thirdblock.css";

export const ThirdBlock = ({ colorText }) => {
  return (
    <div className="numbers-container" style={{ color: colorText }}>
      <div className="numbers-cont">
        <p className="numbers-title">26+</p>
        <p className="numbers-text">Крупных партнёров</p>
      </div>
      <div className="numbers-cont">
        <p className="numbers-title">14+</p>
        <p className="numbers-text">
          Более 14 лет делаем наших клиентов счатливыми
        </p>
      </div>
      <div className="numbers-cont">
        <p className="numbers-title">600+</p>
        <p className="numbers-text">Счастливых клиентов</p>
      </div>
    </div>
  );
};
