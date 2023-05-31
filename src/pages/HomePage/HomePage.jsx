import css from './HomePage.module.css'
import { HeroesList } from 'components/HeroesList/HeroesList'
import { Container } from 'components/Container/Container'

export const HomePage = () => {
  return (
    <Container>
      <main className={css.homePage}>
        <HeroesList />
      </main>
    </Container>
  )
}