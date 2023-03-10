import React from 'react';
import { Country , Search, Filter} from '../../components/index.js';
import './homePage.css';

function HomePage() {
    
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
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
             <Country />
            <Country />
            <Country />
            </div>
            </div>
    )
}

export default HomePage;