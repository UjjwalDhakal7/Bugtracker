import {React, useState} from "react";
import './style.css';
import PopUpForm from '../Forms/AddBug/index.jsx';

function Modal({ isOpen, closeModal, submitData, selectedItem, bugtoEdit }) {
  

  const [scrollLock, setScrollLock] = useState(false);

  if (isOpen && !scrollLock) {
      setScrollLock(true);
      document.body.style.overflow = 'hidden';
  } else if (!isOpen && scrollLock) {
      setScrollLock(false);
      document.body.style.overflow = 'auto';
  }

    if (!isOpen) {
      return null;
    }
    const onAddSuccess = (arg) => {
      submitData(arg);
    }
  return (
      <div class="modal-overlay">
        <div className="modal-main">
          <div className="modal-content">
            <div className="topbar">
            <div className='heading'><h2>Fill Bug Details Below:</h2></div>
            <div className="close"><button onClick={closeModal}>X</button></div>
            </div>
            <PopUpForm onAddSuccess={onAddSuccess} 
           bugtoEdit={selectedItem !== null ? selectedItem : null}
          />
          </div>
        </div>
       </div>
      );
    }

  export default Modal;