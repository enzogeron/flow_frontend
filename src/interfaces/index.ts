export interface ForecastResponse {
  data: ForecastList[]
  city_name: string
  lon: number
  timezone: string
  lat: number
  country_code: string
  state_code: string
}

interface ForecastList {
  moonrise_ts: number
  wind_cdir: string
  rh: number
  pres: number
  high_temp: number
  sunset_ts: number
  ozone: number
  moon_phase: number
  wind_gust_spd: number
  snow_depth: number
  clouds: number
  ts: number
  sunrise_ts: number
  app_min_temp: number
  wind_spd: number
  pop: number
  wind_cdir_full: string
  slp: number
  moon_phase_lunation: number
  valid_date: Date
  app_max_temp: number
  vis: number
  dewpt: number
  snow: number
  uv: number
  weather: WeatherInfo
  wind_dir: number
  max_dhi: null
  clouds_hi: number
  precip: number
  low_temp: number
  max_temp: number
  moonset_ts: number
  datetime: Date
  temp: number
  min_temp: number
  clouds_mid: number
  clouds_low: number
}

interface WeatherInfo {
  icon: string
  code: number
  description: string
}

export interface Weather {
  day: Date
  maxTemp: number
  minTemp: number
  description: string
}

export interface GeolocationResponse {
  name: string
  local_names: LocalNames
  lat: number
  lon: number
  country: string
  state: string
}

interface LocalNames {
  el: string
  ru: string
  ascii: string
  feature_name: string
  pt: string
  uk: string
  es: string
  he: string
  en: string
}
