import './ModalRegister.css';

const ModalRegister = ({ handleClose, showRegister, children }) => {
  const showHideClassName = showRegister ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main-register">
        <button type="button" className = "close-button" onClick={handleClose}>
          X
        </button>
        {children}
      </section>
    </div>
  );
};

export default ModalRegister;