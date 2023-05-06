const asyncRequest = require('async-request')
const chalk = require('chalk')

const getWeather = async (location) => {
  const access_key = '82c592fb5a3df48bc4dec58d91ba508f'
  const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${location}`;

  try {
    const res = await asyncRequest(url)
    const data = JSON.parse(res.body)

    const weather = {
      isSuccess: true,
      region: data.location.region,
      country: data.location.country,
      temperature: data.current.temperature,
      wind_speed: data.current.wind_speed,
      precip: data.current.precip,
      cloudCover: data.current.cloudcover,
    }
    return weather
  } catch (error) {
    return {
      isSuccess: false,
      error,
    }
  }

}


const express = require('express')
const app = express()
const port = 3000

// setup Static file
const path = require('path')
const pathPublic = path.join(__dirname, 'public')
app.use(express.static(pathPublic))

// http://localhost:3000
app.get('/', async (req, res) => {
  const params = req.query // get params return typeof object
  console.log(params)

  const location = params.address
  const weather = await getWeather(location)
  console.log(weather)

  // server side render: weather.hbs file
  if (location) {
    res.render('weather', {
      status: true,
      region: weather.region,
      country: weather.country,
      temperature: weather.temperature,
      wind_speed: weather.wind_speed,
      precip: weather.precip,
      cloudCover: weather.cloudCover,
    })
  } else {
    res.render('weather', {
      status: false,
    })
  }
})

app.set("view engine", "hbs") // tech hbs or use pug

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})