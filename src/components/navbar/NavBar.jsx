import React from 'react';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.css';

function NavBar() {
    
    return (<nav >
        <div className='nav-container'>
            <h1 className='tag'>Where in the world?</h1>
            <div className="darkmode"> <span> <FontAwesomeIcon icon={faMoon} /> </span> <p>Dark Mode</p></div>
        </div>
    </nav> )
}

export default NavBar;