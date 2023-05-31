import { HeroItem } from 'components/HeroItem/HeroItem';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSuperheroes } from 'redux/superheroes/operations';
import { getSuperheroesList, getIsLoading } from 'redux/superheroes/selectors';
import css from './HeroesList.module.css';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Modal } from 'components/Modal/Modal';
import { ModalCreate } from 'components/Modal/ModalCreate';

export const HeroesList = () => {
  const dispatch = useDispatch();
  const superheroes = useSelector(getSuperheroesList);
  const isLoading = useSelector(getIsLoading);
  const [page, setPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getSuperheroes([page, 6]));
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page !== 0) {
      setPage(page - 1);
    } else {
      console.log('minimum');
    }
  };

  const path = id => {
    return `/character/${id}`;
  };

  const handleAddHero = () => {
    console.log('click');
    setIsOpen(true);
  };

  return (
    <div className={css.mainWrapper}>
      <button
        type="button"
        onClick={prevPage}
        className={clsx(css.button, css.buttonLeft)}
      >
        ❬
      </button>
      {!isLoading ? (
        <ul className={css.list}>
          {superheroes.map(hero => (
            <li key={hero._id}>
              <Link to={path(hero._id)}>
                <div className={css.itemWrapper}>
                  <HeroItem hero={hero} />
                </div>
              </Link>
            </li>
          ))}
          {superheroes.length < 6 && (
            <li>
              <div className={css.itemWrapper} onClick={handleAddHero}>
                +
              </div>
            </li>
          )}
        </ul>
      ) : (
        <></>
      )}
      <button
        type="button"
        onClick={nextPage}
        className={clsx(css.button, css.buttonRight)}
      >
        ❭
      </button>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        name={'Create hero'}
      >
        <ModalCreate closeModal={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
};
