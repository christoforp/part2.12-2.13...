import React, { useState, useEffect } from "react";
import axios from 'axios' 
import ShowWeather from "./components/ShowWeather";

const App = () => {
  const [searchFilter, setSearchFilter] = useState('')
  const [countries,setCountries] = useState([])


  

  useEffect(() =>  {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data)
    })
}, [])



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

  




const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchFilter.toLowerCase()))
return(
    <div>
    find countries <input value={searchFilter} onChange={e => setSearchFilter(e.target.value)} />
    <ShowResults  filteredCountries={filteredCountries} setSearchFilter={setSearchFilter}/>
        </div>

)
}
const ShowResults = ({filteredCountries, setSearchFilter}) => {
  if(filteredCountries.length === 1) {
    const country = filteredCountries[0]
    return(
      <div>
        <h1>{country.name}</h1>
        <div>capital {country.capital}</div>
        <div>population {country.population}</div>
          <h1>languages</h1>
        <ul>
        {country.languages.map(language => <li>{language.name}</li>)}
        </ul>
        <img src={country.flag} alt={country.name} width="30%" />
        </div>

    )
  }

     

  
  if(filteredCountries.length > 10) return <div>Too many matches, specify another filter</div> 
  return filteredCountries.map(country => {


    return(
<div key={country.name}>{country.name}<button value={country.name} onClick={(e) => setSearchFilter(e.target.value)}>show</button>
  </div>
  )

    })
  }



  


















export default App


