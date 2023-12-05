import './Navbar.css';
import React, { useState } from 'react';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBars = () => {
        setIsOpen(!isOpen);
    };

    const [isOpen2, setIsOpen2] = useState(false);

    const toggleMore = () => {
        setIsOpen2(!isOpen2);
    }
    return (
        <div>
            <nav className='mobile-nav'>
                {/* Mobile Header Navbar */}
                <div className='m-header'>
                    <div className='m-header-1'>
                        <ul>
                            <li>
                                <a href='' className='company-name'>GI<span className='heart-logo'><i className="fa-solid fa-heart"></i></span>EERS</a>
                            </li>
                            <li>
                                <ul>
                                    <li><a href=''><i className="fa-regular fa-magnifying-glass"></i></a></li>
                                    <li><a href=''><i className="fa-solid fa-bell"></i></a></li>
                                    <li>
                                        <div className={isOpen ? 'bars openbar' : 'bars'} onClick={toggleBars}>
                                            <span className='bar bar-1'></span>
                                            <span className='bar bar-2'></span>
                                            <span className='bar bar-3'></span>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={isOpen ? 'side-nav' : 'side-nav open-side-bar'}>
                    <ul>
                        <li>
                            <a href=''><i className="fa-regular fa-house"></i>Home</a>
                        </li>
                        <li>
                            <a href=''><i className="fa-regular fa-box-heart"></i>Donate</a>
                        </li>
                        <li>
                            <a href=''><i className="fa-regular fa-book-heart"></i>My Donation</a>
                        </li>
                        <li>
                            <a href=''><i className="fa-regular fa-shield-heart"></i>My Beneficiary</a>
                        </li>
                        <li>
                            <a href=''><i className="fa-regular fa-comment-dots"></i>Chat</a>
                        </li>
                        <li>
                            <a href=''><i className="fa-regular fa-heart"></i>Favorite</a>
                        </li>
                        <li>
                            <a href=''><i className="fa-regular fa-user"></i>My Profile</a>
                        </li>
                        <li>
                            <a href=''><i className="fa-regular fa-address-card"></i>About Us</a>
                        </li>
                        <li>
                            <a href=''><i className="fa-regular fa-mobile"></i>Contact Us</a>
                        </li>
                        <li>
                            <a href=''><i className="fa-regular fa-bell"></i>Notification</a>
                        </li>
                        <li>
                            <a href=''><i className="fa-regular fa-arrow-right-from-bracket"></i>Logout</a>
                        </li>
                    </ul>
                </div>
                {/* Mobile Fooder Navbar */}
                <div className='m-footer'>
                    <ul>
                        <li>
                            <a href="/index"><i className="fa-solid fa-house"></i></a>
                        </li>
                        <li>
                            <a href=""><i className="fa-light fa-heart"></i></a>
                        </li>
                        <li>
                            <a href=""><i className="fa-light fa-square-plus"></i></a>
                        </li>
                        <li>
                            <span className='chat-count'>2</span>
                            <a href=""><i className="fa-light fa-comment-dots"></i></a>
                        </li>
                        <li>
                            {/* <a href=""><i className="fa-light fa-bars-progress"></i></a> */}
                            <a href=''><i className="fa-light fa-user"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className='lap-nav'>
                <div className='l-header'>
                    <ul className='l-ul'>
                        <li>
                            <a href='' className='company-name-l'>GI<span className='heart-logo'><i className="fa-solid fa-heart"></i></span>EERS</a>
                        </li>
                        <li>
                            <ul className='lap-right-nav'>
                                <li className='search-div l-li'>
                                    <a href=''>
                                        <label className='g-lable-1'><i className="fa-regular fa-magnifying-glass g-input-icon-1"></i></label>
                                        <input type='search' className='search g-input-field-1' placeholder='Search for donations' />
                                    </a>
                                </li>
                                <li className='l-li'>
                                    <a href="" className='l-s-color'><i className="fa-regular fa-house"></i> Home</a>
                                </li>
                                <li className='l-li'>
                                    <a href='' className='l-s-color'><i className="fa-regular fa-book-heart"></i> My Donation</a>
                                </li>
                                <li className='l-li'>
                                    <a href='' className='l-s-color'><i className="fa-regular fa-shield-heart"></i> My Beneficiary</a>
                                </li>
                                <li className='l-s-color nav-more l-li' onClick={toggleMore}>
                                    <span>
                                    More <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                    <ul className={isOpen2?'nav-more-open':'more-ul'}>
                                        <li>
                                            <a href='' className='l-s-color'><i className="fa-regular fa-address-card"></i>About Us</a>
                                        </li>
                                        <li>
                                            <a href='' className='l-s-color'><i className="fa-regular fa-mobile"></i>Contact Us</a>
                                        </li>
                                        <li>
                                            <a href='' className='l-s-color'><i className="fa-regular fa-arrow-right-from-bracket"></i>Logout</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className='l-li'>
                                    <a href='' className='l-donate-btn'><i className="fa-light fa-square-plus"></i> Donate</a>
                                </li>
                                <li className='l-li l-icon'><a href="" className='l-f-color'><i className="fa-solid fa-heart"></i></a></li>
                                <li className='l-chat-div l-li'>
                                    <span className='chat-count'>2</span>
                                    <a href="" className='l-f-color'><i className="fa-regular fa-comment-dots"></i></a>
                                </li>
                                <li className='l-li l-icon'><a href='' className='l-f-color'><i className="fa-solid fa-bell"></i></a></li>
                                <li className='l-li l-icon'><a href='' className='l-f-color'><i className="fa-solid fa-user"></i></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar