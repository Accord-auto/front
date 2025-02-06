import "./modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <p className="modal-title">{children.title}</p>
        <p className="modal-text">{children.description}</p>
        <button className="modal-btn" onClick={() => onClose()}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Modal;
