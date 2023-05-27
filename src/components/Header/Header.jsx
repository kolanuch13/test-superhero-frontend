import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <h1 className={css.header__logo}>SUPERHEROES</h1>
    </header>
  );
};
