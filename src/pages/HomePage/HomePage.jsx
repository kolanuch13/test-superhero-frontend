import css from './HomePage.module.css'
import { HeroesList } from 'components/HeroesList/HeroesList'

export const HomePage = () => {
  return (
    <main className={css.homePage}>
      <HeroesList />
    </main>
  )
}