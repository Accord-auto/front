import "./error.css";
export const ErrorComponent = ({ text }) => {
  return (
    <div className="error-comp">
      Произошла ошибка на сервере, <br />
      пока что мы не можем
      <br />
      показать вам {text}
    </div>
  );
};
