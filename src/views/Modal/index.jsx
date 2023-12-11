import React from "react";
import './style.css';
import PopUpForm from '../Forms/AddBug/index.jsx';

function Modal({ isOpen, closeModal, setData, submitData }) {
    if (!isOpen) {
      return null;
    }
    const onAddSuccess = (arg) => {
      submitData(arg);
    }
  return (
        <div className="modal-main">
          <div className="modal-content">
            <div className="close"><button onClick={closeModal}>X</button></div>
            <PopUpForm onAddSuccess={onAddSuccess} />
          </div>
        </div>
      );
    }

  export default Modal;