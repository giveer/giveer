import React from 'react'
import './HeartLoader.css';

function HeartLoader({loaderName = "Loading.."}) {
  return (
    <div className="main-heartloader">
        <div class="loader"></div>
        <p className='loader-name'>{loaderName}</p>
    </div>
    
  )
}

export default HeartLoader