import { FC } from 'react'

import { ContainerProps } from './interface'
import styles from './Container.module.scss'

const Container: FC<ContainerProps> = ({ children, className = '' }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>
}

export default Container
