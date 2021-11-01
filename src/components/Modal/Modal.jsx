import React from 'react'
import ReactDOM from 'react-dom'
// import '../style/modal.css'

const { createPortal } = ReactDOM
const Modal = ({ children, onClose, open }) =>
  open
    ? createPortal(
        <div className="modal">
          <button onClick={onClose} className="modal__close">
            &times;
          </button>
          {children}
        </div>,
        document.body
      )
    : null
export default Modal
