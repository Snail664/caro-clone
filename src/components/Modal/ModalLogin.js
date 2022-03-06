import './ModalLogin.css';

const ModalLogin = ({ handleClose, showLogin, children }) => {
  const showHideClassName = showLogin ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main-login">
        <button type="button" className = "close-button" onClick={handleClose}>
          X
        </button>
        {children}
      </section>
    </div>
  );
};

export default ModalLogin;