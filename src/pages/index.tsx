import { NextPage } from 'next'
import { useState, useEffect } from 'react'

import { Container, SelectCustom } from '../components/atoms'
import { Forecast } from '../components/molecules'
import { Header } from '../components/organisms'
import { HeadSeo, Layout } from '../components/templates'
import { CITIES } from '../constants'
import { getGeolocationByCity } from '../services/openWeatherAPI'
import { getForecastNextFiveDays } from '../services/weatherBitAPI'

const IndexPage: NextPage = () => {
  const [items, setItems] = useState([])

  const getForecastByGeoposition = async (
    latitude: number,
    longitude: number
  ) => {
    const forecastCity = await getForecastNextFiveDays(latitude, longitude)
    setItems(forecastCity)
  }

  const getForecastByCity = async (city) => {
    const cityGeo = await getGeolocationByCity(city)
    await getForecastByGeoposition(cityGeo.lat, cityGeo.lon)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      getForecastByGeoposition(
        position.coords.latitude,
        position.coords.longitude
      )
    })
  }, [])

  return (
    <>
      <HeadSeo title="Flow Desafio" />

      <Layout>
        <Header />

        <Container>
          <SelectCustom
            options={CITIES}
            onChange={getForecastByCity}
            defaultValue={'City'}
          />
          <Forecast items={items} />
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
