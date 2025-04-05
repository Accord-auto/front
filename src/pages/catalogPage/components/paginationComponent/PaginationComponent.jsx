import "./paginationcomponent.css";
import left from "../../../../assets/images/left.svg";
import right from "../../../../assets/images/right.svg";

export const PaginationComponent = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="pagination-container">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="btn-arrow-container"
      >
        <img src={left} alt="" className="btn-arrow-pagin" />
      </button>
      <span className="text-pagination">
        Страница {currentPage} из {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="btn-arrow-container"
      >
        <img src={right} alt="" className="btn-arrow-pagin" />
      </button>
    </div>
  );
};
