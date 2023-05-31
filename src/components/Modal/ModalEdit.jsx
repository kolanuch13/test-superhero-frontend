import { useDispatch } from 'react-redux';
import { editSuperhero } from 'redux/superheroes/operations';
import { HeroForm } from 'components/HeroForm/HeroForm';


export const ModalEdit = ({ hero, closeModal }) => {
  const dispatch = useDispatch();
  
  const submitFunc = (id, heroForm) => {
    dispatch(editSuperhero({ id, heroForm }));
    closeModal();
  };

  return (
    <div>
      <HeroForm onSubmitFunc={submitFunc} currentHero={hero} />
    </div>
  );
};
