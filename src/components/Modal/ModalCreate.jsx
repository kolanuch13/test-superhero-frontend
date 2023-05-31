import { useDispatch } from 'react-redux';
import { addSuperhero } from 'redux/superheroes/operations';
import { HeroForm } from 'components/HeroForm/HeroForm';


export const ModalCreate = ({ closeModal }) => {
  const dispatch = useDispatch();


  const submitFunc = (hero) => {
    dispatch(addSuperhero(hero));
    closeModal();
  };

  return (
    <div>
      <HeroForm onSubmitFunc={submitFunc}/>
    </div>
  );
};
