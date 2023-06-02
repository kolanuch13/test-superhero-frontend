import css from './HeroesList.module.css';
import clsx from 'clsx';
import { HeroItem } from 'components/HeroItem/HeroItem';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/superheroes/selectors';
import { Link } from 'react-router-dom';
import { Modal } from 'components/Modal/Modal';
import { ModalCreate } from 'components/Modal/ModalCreate';
import { Oval } from 'react-loader-spinner';

export const HeroesList = ({superheroes}) => {
  const isLoading = useSelector(getIsLoading);
  const [isOpen, setIsOpen] = useState(false);

  const path = id => {
    return `/character/${id}`;
  };

  const handleAddHero = () => {
    console.log('click');
    setIsOpen(true);
  };

  return (
    <div className={css.mainWrapper}>
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
        <div className={css.loaderWrapper}>
          <Oval
            height={80}
            width={80}
            color="#000000"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#646464"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
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
