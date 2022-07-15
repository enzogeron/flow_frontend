export const WEATHER_BIT_API_HOST = 'https://api.weatherbit.io'

export const WEATHER_BIT_API_KEY = process.env.NEXT_PUBLIC_WEATHER_BIT_API_KEY

export const FORECAST_ENDPOINT = `${WEATHER_BIT_API_HOST}/v2.0/forecast/daily`

export const OPEN_WEATHER_API_HOST = `https://api.openweathermap.org`

export const OPEN_WEATHER_API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY

export const GEO_ENDPOINT = `${OPEN_WEATHER_API_HOST}/geo/1.0/direct`

export const CITIES = ['Tucuman', 'Mendoza', 'Salta', 'Buenos Aires', 'Jujuy']
