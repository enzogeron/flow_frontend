import { FC } from 'react'

import styles from './Header.module.scss'
import { Container } from '../../atoms'

const Header: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <Container className={styles['menu-container']}>
          <div className={styles['title-container']}>Flow Desafio</div>
        </Container>
      </header>
    </>
  )
}

export default Header
