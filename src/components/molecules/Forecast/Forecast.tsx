import { FC } from 'react'

import { P, Weather } from '../../atoms'
import { ForecastProps } from './interface'
import styles from './Forecast.module.scss'

const Forecast: FC<ForecastProps> = ({ title = '5-day forecast', items }) => {
  return (
    <div className={styles.container}>
      <P size="md" className={styles.title}>
        {title}
      </P>
      <div>
        {items.map((item, index) => (
          <Weather
            key={index}
            day={item.day}
            maxTemp={item.maxTemp}
            minTemp={item.minTemp}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Forecast
