import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoPencil, IoTrashBinOutline } from 'react-icons/io5';
import { getSuperhero } from 'redux/superheroes/selectors';
import { getOneSuperhero } from 'redux/superheroes/operations';
import { Slider } from 'components/Slider/Slider';
import { Container } from 'components/Container/Container';
import { Modal } from 'components/Modal/Modal';
import { ModalEdit } from 'components/Modal/ModalEdit';
import css from './CharacterPage.module.css';
import { ModalDelete } from 'components/Modal/ModalDelete';

export const CharacterPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const params = useParams();
  const dispatch = useDispatch();
  const hero = useSelector(getSuperhero);

  useEffect(() => {
    dispatch(getOneSuperhero(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleEdit = () => {
    setIsOpen(true);
    setModalType('Edit page');
  };

  const handleDelete = () => {
    setIsOpen(true);
    setModalType('Delete page');
  };

  return (
    <Container>
      <main className={css.character}>
        {hero !== null && (
          <div className={css.characterWrapper}>
            <Slider id={params.id} images={hero?.images} />
            <div className={css.headingWrapper}>
              <h2 className={css.heading}>{hero?.nickname}</h2>
              <div className={css.headingButtons}>
                <button onClick={handleEdit} className={css.button}>
                  <IoPencil size={40} color={'white'} />
                </button>
                <button onClick={handleDelete} className={css.button}>
                  <IoTrashBinOutline size={40} color={'white'} />
                </button>
              </div>
            </div>
            <table>
              <tbody>
                <tr>
                  <th>
                    <p className={css.realName}>Real name</p>
                  </th>
                  <td>
                    <p className={css.realName}>{hero?.realName}</p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p className={css.realName}>Hook</p>
                  </th>
                  <td>
                    <p className={css.realName}>{hero?.catchPhrase}</p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p className={css.description}>Origin</p>
                  </th>
                  <td>
                    <p className={css.description}>{hero?.originDescription}</p>
                  </td>
                </tr>
                <tr>
                  <th className={css.noBorder}>
                    <p className={css.powers}>Superpowers</p>
                  </th>
                  <td>
                    {' '}
                    <ul className={css.powers}>
                      {hero?.superpowers.map((pow, index) => (
                        <li className={css.powersItem} key={index}>
                          <p>{pow}</p>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <Modal open={isOpen} onClose={() => setIsOpen(false)} name={modalType}>
          {modalType === 'Edit page' ? (
            <ModalEdit hero={hero} closeModal={() => setIsOpen(false)} />
          ) : (
            <ModalDelete hero={hero} closeModal={() => setIsOpen(false)} />
          )}
        </Modal>
      </main>
    </Container>
  );
};
