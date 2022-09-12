import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from "./Components/Countries.jsx"
import Country from './Components/Country';
import Header from './Components/Header';
import CountryFilter from './Components/CountryFilter';
import { Route, Switch } from 'react-router-dom';








function App() {

  const [countries, setCountries] = useState([])
  const [filteredCountry, setFilteredCountry] = useState('All');
  const [filteredInput, setFilteredInput] = useState(countries);
  const [currentCountry, setCurrentCountry] = useState('')

  const filterChangeHandler = (selectedCountry) => {
    setFilteredCountry(selectedCountry);
  };
  const inputChangeHandler = (selectedCountry) => {
    setFilteredInput(selectedCountry);
    console.log('agg');
  };

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then((response) => {
      setCountries(response.data);

    }).catch(err => console.log(err))

  }, [])

  const selectCountry = (e) => {
    console.log(e)
    setCurrentCountry(e)
  }

  // const filter = <Countries countryHandler={selectCountry} test={filteredCountry} item={item} key={index} />


  return (
    <div >
      <Header />
      <CountryFilter onChangeFilter={filterChangeHandler} onchangeInput={inputChangeHandler} selected={filteredCountry} />

      <Switch>



        <Route path={"/country"}>


          {countries.map((item, index) => {

            return <Country id={index} curr={currentCountry} item={item} key={item.numericCode} />
          }

          )
          }
        </Route>
        <Route path={'/'} >
          <div className='countries'>
            {
              countries.map((item, index) => {

                if (item.name.includes(`${filteredInput}`) && filteredCountry === item.region) {
                  return < Countries countryHandler={selectCountry} test={filteredCountry} item={item} key={item.numericCode} />

                } else if (item.name.includes(`${filteredInput}`) && filteredCountry === 'All') {
                  return < Countries countryHandler={selectCountry} test={filteredCountry} item={item} key={item.numericCode} />


                }

              })
            }
          </div>
        </Route>



      </Switch>
    </div>
  );
}

export default App;
