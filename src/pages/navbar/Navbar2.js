import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar2.css'

function Navbar2() {
    return (
        <div className='main-navbar2'>
            <div className='navbar2'>
                <div className='navbar2-left'>
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
                <div className='navbar2-right'>
                    <Link to=""><i class="fa-solid fa-magnifying-glass"></i></Link>
                    <Link to="" className='navbar2-heart'><i class="fa-sharp fa-solid fa-heart"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar2