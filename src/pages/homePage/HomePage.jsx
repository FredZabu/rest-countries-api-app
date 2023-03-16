import React, { useEffect, useState } from 'react';
import { Country , Search, Filter} from '../../components/index.js';
import './homePage.css';

function HomePage() {
    const [countryData, setCountryData] = useState([]);
    useEffect(() => { data() }, []);
    const data = async () => {
        const data1 = await fetch('https://restcountries.com/v3.1/all');
        const data2 = await data1.json();
        setCountryData(data2);
    }
    
    return (
        <div className="containi">
            <div className="search-filter-container">
                <div className="search">
                    <Search />
                </div>
                    
                <div className="filter">
                     <Filter />
                   </div>
              
            </div>
        <div className='container'>
                {countryData.map(({ name, capital, population, region , flags}) => {
               return <Country key={name.common} nam = {name.common} cap = {capital} pop = {population} reg = {region} fla = {flags.png} />
            })}
            </div>
            </div>
    )
}

export default HomePage;