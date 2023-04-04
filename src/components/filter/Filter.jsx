import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './filter.css'

function Filter({handleRegSearch}) {
    const [displayFilter, setDisplayFilter] = useState(false);
    const p1 = useRef();
    const p2 = useRef();
    const p3 = useRef();
    const p4 = useRef();
    const p5 = useRef();
  
    const handleClick = () => {
        setDisplayFilter(!displayFilter);
    }
    const handlePclick = (target )=>{
        handleRegSearch(target.current.textContent)
         setDisplayFilter(!displayFilter);
    }
    return (
        <div className='filter-box'>
            <div className='filter-container' onClick={handleClick} >Filter by Region <span> <FontAwesomeIcon icon={faCaretDown} /> </span> </div>
           {displayFilter?  <div className="filter-choice">
                <p ref={p1} onClick={()=>{handlePclick(p1)}} >Africa</p>
                <p ref={p2} onClick={()=>{handlePclick(p2)}}>America</p>
                <p ref={p3} onClick={()=>{handlePclick(p3)}}>Asia</p>
                <p ref={p4} onClick={()=>{handlePclick(p4)}}>Europe</p>
                <p ref={p5} onClick={()=>{handlePclick(p5)}}>Oceania</p>
            </div> :<div></div>}
        </div>
    )
}

export default Filter;