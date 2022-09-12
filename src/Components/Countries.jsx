
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Countries.css'
import Header from './Header';
import { Link } from 'react-router-dom';
const Coutries = (props) => {

    const country = (e) => {
        console.log(e.target.innerHTML);
        props.countryHandler(e.target.innerHTML)

    }

    return (




        <div id={props.item.name} className={'inner-info'}>

            <div>

                <img className='flag' src={props.item.flag} alt="" />
            </div>
            <Link to="/country">
                <h4 onClick={country} >{props.item.name}</h4>
            </Link>
            <p>Population : {props.item.population}</p>
            <p>Region : {props.item.region}</p>
            <p>Capital : {props.item.capital}</p>
        </div>









    )
}

export default Coutries