import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './HomeFooter.css'

function HomeFooter() {
    const [isOpen, setIsOpen] = useState(false);
    const hide = ()=>{
        setIsOpen(false);
    }
  return (
    <div className='main-homefooter'>
        {/* Mobile Fooder Navbar */}
        <div className='m-footer'>
                    <ul>
                        <li>
                        <Link to='/index' onClick={hide}><i className="fa-solid fa-house"></i></Link>
                        </li>
                        <li>
                            <Link to='' onClick={hide}><i className="fa-light fa-heart"></i></Link>
                        </li>
                        <li>
                            <Link to='' onClick={hide}><i className="fa-light fa-square-plus"></i></Link>
                        </li>
                        <li>
                            <span className='chat-count'>2</span>
                            <Link to='' onClick={hide}><i className="fa-light fa-comment-dots"></i></Link>
                        </li>
                        <li>
                            {/* <Link to='' onClick={hide}><i className="fa-light fa-bars-progress"></i></Link> */}
                            <Link to='' onClick={hide}><i className="fa-light fa-user"></i></Link>
                        </li>
                    </ul>
                </div>
    </div>
  )
}

export default HomeFooter