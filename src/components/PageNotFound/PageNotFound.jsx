import { Container } from 'components/Container/Container'
import css from './PageNotFound.module.css'

export const PageNotFound = () => {
  return (
    <div>
      <Container>
        <div className={css.pageWrapper}>
          <ul className={css.text}>
            <li className={css.textItem}>P</li>
            <li className={css.textItem}>a</li>
            <li className={css.textItem}>g</li>
            <li className={css.textItem}>e</li>
            <li className={css.textItem}>N</li>
            <li className={css.textItem}>o</li>
            <li className={css.textItem}>t</li>
            <li className={css.textItem}>F</li>
            <li className={css.textItem}>o</li>
            <li className={css.textItem}>u</li>
            <li className={css.textItem}>n</li>
            <li className={css.textItem}>d</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
