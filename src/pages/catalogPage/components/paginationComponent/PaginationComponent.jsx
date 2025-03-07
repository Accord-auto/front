import "./paginationcomponent.css";

export const PaginationComponent = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Назад
      </button>
      <span>
        Страница {currentPage} из {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Вперед
      </button>
    </div>
  );
};
