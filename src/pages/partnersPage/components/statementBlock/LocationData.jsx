export const LocationData = () => {
  return (
    <>
      <p className="statement-title">Расположение</p>
      <div className="statement-data-container">
        <label htmlFor="" className="statement-label">
          Страна*
          <input
            className="statement-input"
            type="text"
            placeholder="Введите страну"
          />
        </label>
        <label htmlFor="" className="statement-label">
          Регион*
          <input
            className="statement-input"
            type="text"
            placeholder="Введите регион"
          />
        </label>
        <label htmlFor="" className="statement-label">
          Город*
          <input
            className="statement-input"
            type="text"
            placeholder="Введите город"
          />
        </label>
      </div>
    </>
  );
};
