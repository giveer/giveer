import React from 'react'
import './SearchNavbar.css'
import { Link } from 'react-router-dom'
function SearchNavbar() {
  return (
    <div className='main-searchnavbar'>
        <div className='searchnavbar-left'>
            <i class="fa-solid fa-arrow-left"></i>
            <p>dress</p>
        </div>
        <div className='searchnavbar-right'>
            <Link to=""><i class="fa-solid fa-magnifying-glass"></i></Link>
            <Link to=""><i class="fa-regular fa-filter-list"></i></Link>
            <Link to="" className='searchnavbar-heart'><i class="fa-sharp fa-solid fa-heart"></i></Link>
        </div>
    </div>
  )
}

export default SearchNavbar