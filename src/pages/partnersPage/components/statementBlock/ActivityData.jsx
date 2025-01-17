export const ActivityData = () => {
  return (
    <>
      <p className="statement-title">Деятельность</p>

      <div className="statement-data-container">
        <label htmlFor="" className="statement-label">
          Сфера деятельности*
          <input
            className="statement-input"
            type="text"
            placeholder="Введите деятельность"
          />
        </label>
        <label htmlFor="" className="statement-label">
          Ссылка на сайт компании
          <input
            className="statement-input"
            type="text"
            placeholder="Добавьте ссылку"
          />
        </label>
        <label htmlFor="" className="statement-label">
          Сообщение*
          <input
            className="statement-input"
            type="text"
            placeholder="Введите ваше сообщение"
          />
        </label>
      </div>
    </>
  );
};
