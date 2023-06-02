import css from './HomePage.module.css';
import clsx from 'clsx';
import { HeroesList } from 'components/HeroesList/HeroesList';
import { Container } from 'components/Container/Container';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSuperheroes } from 'redux/superheroes/operations';
import { getSuperheroesList } from 'redux/superheroes/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const HomePage = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const superheroes = useSelector(getSuperheroesList);

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

  useEffect(() => {
    dispatch(getSuperheroes([page, 6]));
  }, [page]);

  return (
    <Container>
      <main className={css.homePage}>
        {' '}
        <button
          type="button"
          onClick={prevPage}
          className={clsx(css.button, css.buttonLeft)}
        >
          ❬
        </button>
        <HeroesList superheroes={superheroes} />
        <button
          type="button"
          onClick={nextPage}
          className={clsx(css.button, css.buttonRight)}
        >
          ❭
        </button>
      </main>
    </Container>
  );
};
