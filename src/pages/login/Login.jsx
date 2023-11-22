import React from 'react'
import './Login.css'

const Log_in = () => {
  return (
    <div className='log'>
        <div className='log_head'><p>Login here</p></div>
        <div><p>Well Come Back We Have Missed You</p></div>
        <div className="email">
            <input type="text" id='email' placeholder='Email'/>
        </div>
        <div className="password">
            <input type="password" id='password' placeholder='Password'/>
        </div>
        <div className="forgetpass">
            <a href="" id='forgetpass'>Forget Password?</a>
        </div>
        <div className="logbtn">
            <button type="button" id='logbtn'>Login</button>
        </div>
    </div>
  )
}

export default Log_in