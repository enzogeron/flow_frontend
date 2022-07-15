import axios from 'axios'

import {
  FORECAST_ENDPOINT,
  WEATHER_BIT_API_HOST,
  WEATHER_BIT_API_KEY,
} from '../constants'
import { ForecastResponse, Weather } from '../interfaces/index'

const instance = axios.create({
  baseURL: WEATHER_BIT_API_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getForecastByPosition = async (
  latitude: number,
  longitude: number
): Promise<ForecastResponse> => {
  const response = await instance.get<ForecastResponse>(
    `${FORECAST_ENDPOINT}?lat=${latitude}&lon=${longitude}&key=${WEATHER_BIT_API_KEY}`
  )
  return response.data
}

export const getForecastNextFiveDays = async (
  latitude: number,
  longitude: number
): Promise<Weather[]> => {
  const listForecast = await getForecastByPosition(latitude, longitude)
  const result = listForecast.data.slice(0, 5).map((forecast) => ({
    day: forecast.datetime,
    maxTemp: forecast.app_max_temp,
    minTemp: forecast.app_min_temp,
    description: forecast.weather.description,
  }))
  return result
}
