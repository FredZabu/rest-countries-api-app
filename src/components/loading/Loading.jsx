import React from 'react'
import loading from '../../assets/duck.gif'
import './loading.css';

function Loading() {
  return (
   <div className="loading">
                    <img src={loading} alt="loading...." srcset="" />
                    <p>Loading....</p>
                </div>
  )
}

export default Loading