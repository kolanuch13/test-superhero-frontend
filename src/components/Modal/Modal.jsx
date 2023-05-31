import React from 'react'
import css from './Modal.module.css'
import { IoCloseOutline } from 'react-icons/io5';

export const Modal = ({ open, children, onClose, name }) => {
  if (!open) return null
 
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <div className={css.modalHeader}>
          <h2 className={css.modalHeading}>{name}</h2>
          <button className={css.button} onClick={onClose}>
            <IoCloseOutline size={40} color={'black'} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
