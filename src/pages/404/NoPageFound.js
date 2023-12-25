import React from 'react'
import './NoPageFound.css'
import { Link } from 'react-router-dom'
function NoPageFound() {
  return (
    <div className="flex-container">
      <div className="text-center">
        <h1>
          <span className="fade-in" id="digit1">4</span>
          <span className="fade-in" id="digit2">0</span>
          <span className="fade-in" id="digit3">4</span>
        </h1>
        <h3 className="fadeIn">PAGE NOT FOUND</h3>
        <br />
        <Link to="index" className='r-btn' name="button">Return To Home</Link>
      </div>
    </div>
  )
}

export default NoPageFound