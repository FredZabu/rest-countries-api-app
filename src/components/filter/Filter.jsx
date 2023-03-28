import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './filter.css'

function Filter() {
    return (
        <div>
            <div className='filter-container'>Filter by Region <span> <FontAwesomeIcon icon={faCaretDown} /> </span> </div>
            <div className="filter-choice">
                <p>Africa</p>
                <p>America</p>
                <p>Asia</p>
                <p>Europe</p>
                <p>Oceania</p>
            </div>
        </div>
    )
}

export default Filter;