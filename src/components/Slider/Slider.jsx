import { useEffect, useState } from 'react';
import css from './Slider.module.css';
import { AddNewImage } from 'components/AddNewImage/AddNewImage';

export const Slider = ({id, images }) => {
  const [sliderData, setSliderData] = useState(images[0]);

  const handleClick = index => {
    const slider = images[index];
    setSliderData(slider);
  };

  useEffect(() => {
    setSliderData(images[0]);
  }, [images]);

  return (
    <div className={css.slider}>
      <img className={css.mainImage} src={sliderData} alt="mainHero" />
      <div className={css.flexRow}>
        <ul className={css.list}>
          {images?.map((img, index) => (
            <li key={index} className={css.imageWrapper}>
              <img
                className={css.secondaryImage}
                src={img}
                onClick={() => handleClick(index)}
                alt="hero"
              />
            </li>
          ))}
          <li>
            <div className={css.imageWrapper}>
              <div className={css.icon}>
                <AddNewImage id={id} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
