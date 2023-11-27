import './Signup.css';
import { ReactComponent as DonationIcon } from '../../assets/svg/donation.svg';
// import '../validation/validation.js';
import React, { useState } from 'react';
import {isValidEmail, isValidPassword} from '../validation/validation'


function Signup() {
    const [mailError, setError] = useState('');
    const handleEmailInput = (event) => {
        const val = event.target.value;
        setError(isValidEmail(val, "Email"));
    };

    const [passwordError, setPasswordError] = useState('');
    const handlePasswordInput = (event) =>{
        const val = event.target.value;
        setPasswordError(isValidPassword(val, "Password"));
    }

    const [confirmPasswordError, setConfirmPassword] = useState('');
    const handleConfirmPasswordInput = (event) =>{
        const val = event.target.value;
        if(val!==''){
            if(val!=document.querySelector('input[name="password"]').value){
                setConfirmPassword('Passwords do not match');
            }else{
                setConfirmPassword('');
            }
        }else{
            setConfirmPassword('Confirmation is required');
        }
        
    }
    return (
        <div className="center-div">
            <div className='signup'>
                <div className='signup-1'>
                    <h4 className="g-h-4">Create Account</h4>
                    <p className="g-signup-p">Congratulations on taking the first step towards making a difference</p>
                    <div className="g-input-field-div-1">
                        <label className='g-lable-1'><i class="fa-regular fa-user g-input-icon-1"></i></label>
                        <input type="text" name="name" className="g-input-field-1" placeholder="Full Name" />
                    </div>
                    <div className="g-input-field-div-1">
                        <label className='g-lable-1'><i class="fa-regular fa-envelope g-input-icon-1"></i></label>
                        <input type="text" name="email" className="g-input-field-1" placeholder="Email" onChange={handleEmailInput} />
                        {mailError && <span className='input-error' id="email-error">{mailError}</span>}
                    </div>
                    <div className="g-input-field-div-1">
                        <label className='g-lable-1'><i class="fa-regular fa-lock g-input-icon-1"></i></label>
                        <input type="password" name="password" className="g-input-field-1" placeholder="Password" onChange={handlePasswordInput}/>
                        {passwordError && <span className='input-error' id="password-error">{passwordError}</span>}
                    </div>
                    <div className="g-input-field-div-1">
                        <label className='g-lable-1'><i class="fa-regular fa-lock-keyhole g-input-icon-1"></i></label>
                        <input type="password" name="c-password" className="g-input-field-1" placeholder="Confirm Password" onChange={handleConfirmPasswordInput}/>
                        {confirmPasswordError && <span className='input-error' id="confirm-password-error">{confirmPasswordError}</span>}
                    </div>
                    <div className="g-input-field-div-1">
                        <button className="g-btn-1">Create Account</button>
                    </div>
                </div>
                <div className='signup-2'>
                    <DonationIcon />
                </div>
            </div>
        </div>
    )
}
export default Signup