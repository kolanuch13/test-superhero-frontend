import css from './HeroItem.module.css';

export const HeroItem = ({ hero }) => {
  return (
    <div className={css.wrapper}>
      <img className={css.image} src={hero?.images[0]} alt="logo" />
      <div className={css.nameWrapper}>
        <h2 className={css.name}>{hero?.nickname}</h2>
      </div>
    </div>
  );
};
