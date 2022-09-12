import React from 'react'
import './CountryFilter.css'

const CountryFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
        console.log(event.target.value)
    };

    const inputHandler = (event) => {
        // props.onChangeFilter(event.target.value);
        console.log(event.target.value)
        props.onchangeInput(event.target.value)
    };

    return (
        <div className='expenses-filter'>
            <div className="input">

                <input onChange={inputHandler} placeholder="Search for a country" type="text" />
            </div>
            <div className='expenses-filter__control'>

                <select value={props.selected} onChange={dropdownChangeHandler}  >
                    <option hidden>Filter by Region</option>
                    <option value='All'>All</option>
                    <option value='Africa'>Africa</option>
                    <option value='Americas'>America</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceanie</option>
                </select>
            </div>
        </div>
    )
}

export default CountryFilter