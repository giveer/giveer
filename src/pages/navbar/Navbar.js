import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBars = () => {
        setIsOpen(!isOpen);
    };

    const [isOpen2, setIsOpen2] = useState(false);

    const toggleMore = () => {
        setIsOpen2(!isOpen2);
    }

    const hide = ()=>{
        setIsOpen(false);
    }
    return (
        <div className='main-navbar'>
            <nav className='mobile-nav'>
                {/* Mobile Header Navbar */}
                <div className='m-header'>
                    <div className='m-header-1'>
                        <ul>
                            <li>
                                <Link to='' onClick={hide} className='company-name'>GI<span className='heart-logo'><i className="fa-solid fa-heart"></i></span>EERS</Link>
                            </li>
                            <li>
                                <ul>
                                    <li><Link to='' onClick={hide}><i className="fa-regular fa-magnifying-glass"></i></Link></li>
                                    <li><Link to='' onClick={hide}><i className="fa-solid fa-bell"></i></Link></li>
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
                            <Link to='' onClick={hide}><i className="fa-regular fa-house"></i>Home</Link>
                        </li>
                        <li>
                            <Link to='' onClick={hide}><i className="fa-regular fa-box-heart"></i>Donate</Link>
                        </li>
                        <li>
                            <Link to='' onClick={hide}><i className="fa-regular fa-book-heart"></i>My Donation</Link>
                        </li>
                        <li>
                            <Link to='' onClick={hide}><i className="fa-regular fa-shield-heart"></i>My Beneficiary</Link>
                        </li>
                        <li>
                            <Link to='' onClick={hide}><i className="fa-regular fa-comment-dots"></i>Chat</Link>
                        </li>
                        <li>
                            <Link to='' onClick={hide}><i className="fa-regular fa-heart"></i>Favorite</Link>
                        </li>
                        <li>
                            <Link to='/profile' onClick={hide}><i className="fa-regular fa-user"></i>My Profile</Link>
                        </li>
                        <li>
                            <Link to='' onClick={hide}><i className="fa-regular fa-address-card"></i>About Us</Link>
                        </li>
                        <li>
                            <Link to='' onClick={hide}><i className="fa-regular fa-mobile"></i>Contact Us</Link>
                        </li>
                        <li>
                            <Link to='' onClick={hide}><i className="fa-regular fa-bell"></i>Notification</Link>
                        </li>
                        <li>
                            <Link to='/signin' onClick={hide}><i className="fa-regular fa-arrow-right-from-bracket"></i>Sign In</Link>
                        </li>
                        <li>
                            <Link to='' onClick={hide}><i className="fa-regular fa-arrow-right-from-bracket"></i>Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className='lap-nav'>
                <div className='l-header'>
                    <ul className='l-ul'>
                        <li>
                            <Link to='' onClick={hide} className='company-name-l'>GI<span className='heart-logo'><i className="fa-solid fa-heart"></i></span>EERS</Link>
                        </li>
                        <li>
                            <ul className='lap-right-nav'>
                                <li className='search-div l-li'>
                                    <Link to='' onClick={hide}>
                                        <label className='g-lable-1'><i className="fa-regular fa-magnifying-glass g-input-icon-1"></i></label>
                                        <input type='search' className='search g-input-field-1' placeholder='Search for donations' />
                                    </Link>
                                </li>
                                <li className='l-li'>
                                    <Link to='' onClick={hide} className='l-s-color'><i className="fa-regular fa-house"></i> Home</Link>
                                </li>
                                <li className='l-li'>
                                    <Link to='' onClick={hide} className='l-s-color'><i className="fa-regular fa-book-heart"></i> My Donation</Link>
                                </li>
                                <li className='l-li'>
                                    <Link to='' onClick={hide} className='l-s-color'><i className="fa-regular fa-shield-heart"></i> My Beneficiary</Link>
                                </li>
                                <li className='l-s-color nav-more l-li' onClick={toggleMore}>
                                    <span>
                                    More <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                    <ul className={isOpen2?'nav-more-open':'more-ul'}>
                                        <li>
                                            <Link to='' onClick={hide} className='l-s-color'><i className="fa-regular fa-address-card"></i>About Us</Link>
                                        </li>
                                        <li>
                                            <Link to='' onClick={hide} className='l-s-color'><i className="fa-regular fa-mobile"></i>Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link to='' onClick={hide} className='l-s-color'><i className="fa-regular fa-arrow-right-from-bracket"></i>Logout</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className='l-li'>
                                    <Link to='' onClick={hide} className='l-donate-btn'><i className="fa-light fa-square-plus"></i> Donate</Link>
                                </li>
                                <li className='l-li l-icon'><Link to='' onClick={hide} className='l-f-color'><i className="fa-solid fa-heart"></i></Link></li>
                                <li className='l-chat-div l-li'>
                                    <span className='chat-count'>2</span>
                                    <Link to='' onClick={hide} className='l-f-color'><i className="fa-regular fa-comment-dots"></i></Link>
                                </li>
                                <li className='l-li l-icon'><Link to='' onClick={hide} className='l-f-color'><i className="fa-solid fa-bell"></i></Link></li>
                                <li className='l-li l-icon'><Link to='' onClick={hide} className='l-f-color'><i className="fa-solid fa-user"></i></Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar