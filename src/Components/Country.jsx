import React, { useState, useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import axios from 'axios';

const Country = (props) => {
    const [curr, setCurr] = useState([])
    let { state } = useLocation()

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all').then((response) => {
            setCurr(response.data);

        }).catch(err => console.log(err))

    }, [])
    console.log(curr)


    return (
        <div>

            <div className={props.item.name === props.curr ? 'test' : 'dnone'}>


                <Link to="/">
                    <button>back</button>
                </Link>

                <div>
                    <div><img src={props.item.flag} alt="" /></div>
                </div>
                <div className='inner-infos'>
                    <div>
                        <h1>{props.item.name}</h1>
                        <p >Native Name : {props.item.nativeName}</p>
                        <p>Population: {props.item.population}</p>
                        <p>Region: {props.item.region}</p>
                        <p>Sub Region: {props.item.subregion}</p>
                        <p>Capital : {props.item.capital}</p>
                    </div>
                    <div>
                        <p>Top Level Domain: {props.item.topLevelDomain}</p>

                    </div>
                </div>
                <div className='border'>Border Countries: {props.item.borders}
                    _</div>
            </div>

        </div>

    )
}

export default Country