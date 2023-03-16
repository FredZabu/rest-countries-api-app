import React from 'react';
import './country.css';


function Country(props) {
    const { nam, cap, pop , reg, fla} = props;
    
    return (
        <div className='card'>
            <div className="image"><img src={fla} alt="this is a flag for a country" /></div>
        
        <div className="infor">
                <h4>{ nam}</h4>
                <p><span className='inf1'>Population: </span> <span>{ pop}</span ></p>
                <p><span className='inf1'>Region: </span> <span>{ reg}</span></p>
                <p><span className='inf1'>Capital: </span> <span>{ cap}</span></p>
        </div>
    </div> )
}

export default Country;