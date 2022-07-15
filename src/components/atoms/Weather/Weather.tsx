import { FC } from 'react'

import { WeatherProps } from './interface'
import P from '../P/P'
import styles from './Weather.module.scss'

const Weather: FC<WeatherProps> = ({
  day,
  maxTemp,
  minTemp,
  description,
  icon = null,
}) => {
  const temp = `${maxTemp} / ${minTemp}°C`
  return (
    <div className={styles.container}>
      <P size="sm">{day}</P>
      <div className={styles['content-temp']}>
        <P size="sm">{temp}</P>
        <P size="sm" className={styles.description}>
          {description}
        </P>
      </div>
    </div>
  )
}

export default Weather
