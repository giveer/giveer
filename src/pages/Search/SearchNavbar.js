import React from 'react'
import './SearchNavbar.css'
import { Link } from 'react-router-dom'
function SearchNavbar({query="giveer"}) {
  return (
    <div className='main-searchnavbar'>
      <div className='searchnavbar'>
        <div className='searchnavbar-left'>
          <i class="fa-solid fa-arrow-left"></i>
          <p>{query}</p>
        </div>
        <div className='searchnavbar-right'>
          <Link to=""><i class="fa-solid fa-magnifying-glass"></i></Link>
          <div><i class="fa-regular fa-filter-list"></i></div>
          <Link to="" className='searchnavbar-heart'><i class="fa-sharp fa-solid fa-heart"></i></Link>
        </div>
      </div>
      {/* filter pop up */}
    </div>
  )
}

export default SearchNavbar