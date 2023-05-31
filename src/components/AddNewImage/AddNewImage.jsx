import { useDispatch } from 'react-redux';
import { addNewImage } from 'redux/superheroes/operations';
import css from './AddNewImage.module.css';

export const AddNewImage = ({ id }) => {
  const dispatch = useDispatch();

  const handleSubmitImage = e => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('flatImage', file);
    dispatch(addNewImage({ formData, id }));
  };

  return (
    <div>
      <>
        <label htmlFor="flatImage">+</label>
        <input
          onChange={handleSubmitImage}
          type="file"
          name="flatImage"
          id="flatImage"
          className={css.flatImage}
        />
      </>
    </div>
  );
};
