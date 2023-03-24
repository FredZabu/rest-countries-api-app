import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Country, Filter, Loading } from '../../components/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './homePage.css';

function HomePage() {

    // This maintains the state for all country data
    const [countryData, setCountryData] = useState([]);

    // This maintains the state of the search bar values
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => { datat() }, []);

    // function that fetches all country data
    const datat = async () => {
        try {
            const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,region,flags');
            
            const data = await res.json(); 
            setCountryData(data);  
           
        } catch (error) {
           console.log(error); 
        }
        
    }

    // function that fetches data by country name
    const searchByValue = async (val) => {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${val}`);
            console.log(res);
            if (res.ok) {
                const data = await res.json();
                setCountryData(data); 
            }
            
        } catch (error) {
            console.log(error);
        }
        
    }
    

    // This function is called each time the value changes in the search bar
    const handleChange = (event) => {
        setSearchValue(event.target.value);
        if (event.target.value === "") {
            datat();
        }
        else {
            searchByValue(event.target.value);
        }
        
    }
    
    return (
        <div className="containi">
            <div className="search-filter-container">
                <div className="search">
                    <form>
            <div className="input-group">
                <div className="input-group-append">
          <button className="btn" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={handleChange}
        />
        
      </div>
    </form>
                </div>
                    
                <div className="filter">
                     <Filter />
                   </div>
              
            </div>
        <div className='container'>
                {
                    countryData.length!==0?  countryData.map(({ name, capital, population, region , flags}) => {
                    return ( <Link to={`/${name.common}`} key={name.common} ><Country  nam = {name.common} cap = {capital} pop = {population} reg = {region} fla = {flags.png} /></Link> )
                    
            }): <Loading />
               }
                
            </div>
            </div>
    )
}

export default HomePage;