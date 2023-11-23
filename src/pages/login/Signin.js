import React from 'react'
import './Login.css'

const Signin = () => {
    return (
        <div className='page'>
            <div className='log'>
                <div className='log_head'><p>Login here</p></div>
                <div><p>Well Come Back We Have Missed You</p></div>
                <div className="email">
                    <label><i class="fa-regular fa-envelope"></i></label>
                    <input type="text" id='email' placeholder='Email' />
                </div>
                <div className="password">
                    <label><i class="fa fa-key" aria-hidden="true"></i></label>
                    <input type="password" id='password' placeholder='Password' />
                </div>
                <div className="forgetpass">
                    <a href="" id='forgetpass'>Forget Password?</a>
                </div>
                <div className="logbtn">
                    <button type="button" id='logbtn'>Login</button>
                </div>
                <div className='or'>
                    <hr></hr><p className='space'>Or</p><hr></hr>
                </div>
                <div className='icon'>
                    <label><i class="fa-brands fa-google"></i></label>
                    <label><i class="fa-brands fa-facebook"></i></label>
                    <label><i class="fa-brands fa-instagram"></i></label>
                    <label><i class="fa-brands fa-telegram"></i></label>
                    <label><i class="fa-brands fa-whatsapp"></i></label>
                    <label><i class="fa-brands fa-youtube"></i></label>
                    <label><i class="fa-brands fa-x-twitter"></i></label>
                </div>
            </div>
        </div>
    )
}

export default Signin