import { fetchCountries } from "../../../../shared/api/regionApi";

export const PersonalData = () => {
  return (
    <>
      <p className="statement-title" onClick={() => fetchCountries()}>
        Ваши данные
      </p>

      <div className="statement-data-container">
        <label htmlFor="" className="statement-label">
          ФИО*
          <input
            className="statement-input"
            type="text"
            placeholder="Крид Егор Николаевич"
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
            placeholder="IvanIvanov@gmail.com"
          />
        </label>
      </div>
    </>
  );
};
