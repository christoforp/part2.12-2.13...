import React, {useState, useEffect} from 'react'

import axios from 'axios'


const api_key = process.env.REACT_APP_API_KEY




  const ShowWeather = ({country}) => {
    const [weather, setWeather] = useState({})

    const url= 'https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=c33304cefa8d45d3c9835b64bce7ceda'



  


  

    useEffect(() => {
      axios
      .get('http://api.weatherstack.com/current?access_key=57f478ad7ef5e99b1a796c2453aaf3d8&query{country.name}')
      .then(res => setWeather(res.data))
    }, [country])


    return (
      <>
      <h1>Weather in {country.name}</h1>
      <div><b>temperature:</b>{weather.current?.temperature} Celsius</div> 
      <img src={weather.current?.weather_icons[0]} alt={weather.current?.weather_descriptions[0]}/>
      <div><b>wind:</b>{weather.current?.wind_speed}mph direction {weather.current?.weather_directions}</div>
      </>

    )
  }

  export default ShowWeather