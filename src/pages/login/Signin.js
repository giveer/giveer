import React from 'react'
import './Login.css'

const Signin = () => {
    return (
        <div className='page'>
            <div className='log'>
                <div className='log_head'><p>Login here</p></div>
                <div><p>Well Come Back We Have Missed You</p></div>
                <div className="g-input-field-div-1">
                    <label className='g-lable-1'><i class="fa-regular fa-envelope g-input-icon-1"></i></label>
                    <input type="text" name='email' className="g-input-field-1" placeholder='Email' />
                </div>
                <div className="g-input-field-div-1">
                    <label className='g-lable-1'><i class="fa fa-key g-input-icon-1" aria-hidden="true"></i></label>
                    <input type="password" name='password' className="g-input-field-1" placeholder='Password' />
                </div>
                <div className="forgetpass">
                    <a href="" id='forgetpass'>Forget Password?</a>
                </div>
                <div className="g-input-field-div-1">
                    <button type="button" className="g-btn-1">Login</button>
                </div>
                <div className='or'>
                    <hr></hr><p className='space'>Or</p><hr></hr>
                </div>
            </div>
        </div>
    )
}

export default Signin