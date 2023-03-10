import React from 'react';
import './country.css';
import countryImage from '../../assets/flag.jpg';

function Country() {
    
    return (
    <div className='card'>
        <img src={countryImage} alt="this is a flag for a country" />
        <div className="infor">
            <h4>United Kingdome</h4>
            <p><span className='inf1'>Population: </span> <span>11,00,000</span ></p>
            <p><span className='inf1'>Region: </span> <span>11,00,000</span></p>
            <p><span className='inf1'>Capital: </span> <span>11,00,000</span></p>
        </div>
    </div> )
}

export default Country;