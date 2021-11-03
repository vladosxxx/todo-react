import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { idText } from 'typescript'
// import '../style/modal.css'

const { createPortal } = ReactDOM
interface modalProp {
  children: object
  onClose: () => void
  open: boolean
}
const Modal = ({ children, onClose, open }: modalProp) => {
  let modalRef: any = useRef()
  useEffect(() => {
    let handler: any = document.addEventListener('mousedown', (event) => {
      if (!modalRef.current?.contains(event.target as HTMLElement)) {
        onClose()
      }
      document.addEventListener('mousedown', handler)
      return () => document.addEventListener('mousedown', handler)
    })
  }, [modalRef])
  return open
    ? createPortal(
        <div className="modal" ref={modalRef}>
          <button onClick={onClose} className="modal__close">
            &times;
          </button>
          {children}
        </div>,
        document.body
      )
    : null
}
export default Modal
