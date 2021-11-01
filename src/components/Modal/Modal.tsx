import React from 'react'
import ReactDOM from 'react-dom'
// import '../style/modal.css'

const { createPortal } = ReactDOM
interface modalProp {
  children: object
  onClose: () => void
  open: boolean
}
const Modal = ({ children, onClose, open }: modalProp) =>
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
