import React, { useState } from 'react';
import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {

    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }
    
    return (
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
    )
}

export default Search;