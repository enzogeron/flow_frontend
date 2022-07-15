import { FC } from 'react'

import { PProps } from './interface'
import styles from './P.module.scss'

const P: FC<PProps> = ({ children, className = '', size }) => {
  return (
    <p className={`${styles.p} ${styles[size]} ${className}`}>{children}</p>
  )
}

export default P
