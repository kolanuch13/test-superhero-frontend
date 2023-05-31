import React from 'react'
import { useDispatch } from 'react-redux';
import { removeSuperhero } from 'redux/superheroes/operations';
import css from './ModalDelete.module.css';

export const ModalDelete = ({ hero, closeModal }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(removeSuperhero(hero._id))
    closeModal()
  }
  return (
    <div>
      <h2>Are you shure?</h2>
      <div className={css.buttonWrapper}>
        <button onClick={closeModal} type="button" className={css.buttonNo}>
          No
        </button>
        <button onClick={handleClick} type="button" className={css.buttonYes}>
          Yes
        </button>
      </div>
    </div>
  );
};
