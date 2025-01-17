export const PersonalData = () => {
  return (
    <>
      <p className="statement-title">Ваши данные</p>

      <div className="statement-data-container">
        <label htmlFor="" className="statement-label">
          ФИО*
          <input
            className="statement-input"
            type="text"
            placeholder="Введите ФИО"
          />
        </label>
        <label htmlFor="" className="statement-label">
          Номер телефона*
          <input
            className="statement-input"
            type="number"
            placeholder="8XXXXXXXXXX"
          />
        </label>
        <label htmlFor="" className="statement-label">
          E-mail*
          <input
            className="statement-input"
            type="text"
            placeholder="Введите почту"
          />
        </label>
      </div>
    </>
  );
};
