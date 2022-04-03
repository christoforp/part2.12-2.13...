import React, { useState, useEffect } from "react";
import axios from 'axios' 

const App = () => {
  const [searchFilter, setSearchFilter] = useState('')
  const [countries,setCountries] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data)
    })
}, [])




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


