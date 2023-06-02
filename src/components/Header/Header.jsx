import css from './Header.module.css';
import { Modal } from 'components/Modal/Modal';
import { ModalAccess } from 'components/Modal/ModalAccess';
import { useState } from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const handleAccess = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <header className={css.header}>
        {location.pathname !== '/' && (
          <Link to={'/'} className={css.button}>
            <IoArrowBackSharp color={'white'} />
          </Link>
        )}
        <div className="logoWrapper">
          <h1 className={css.headerLogo}>
            SUPER
            <span className={css.lock} onClick={handleAccess}>
              H
            </span>
            EROES
          </h1>
        </div>
      </header>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalAccess />
      </Modal>
    </div>
  );
};
