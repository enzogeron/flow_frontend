import axios from 'axios'

import {
  GEO_ENDPOINT,
  OPEN_WEATHER_API_HOST,
  OPEN_WEATHER_API_KEY,
} from '../constants'
import { GeolocationResponse } from '../interfaces/index'

const instance = axios.create({
  baseURL: OPEN_WEATHER_API_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getGeolocationByCity = async (
  name: string
): Promise<GeolocationResponse> => {
  const response = await instance.get<GeolocationResponse>(
    `${GEO_ENDPOINT}?q=${name}&limit=1&appid=${OPEN_WEATHER_API_KEY}`
  )
  return response.data[0]
}
