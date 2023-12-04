import './Signup.css';
import { ReactComponent as DonationIcon } from '../../assets/svg/donation.svg';
// import '../validation/validation.js';
import React, { useState } from 'react';
import { isValidEmail, isValidPassword } from '../validation/validation'


function Signup() {
    const [mailError, setError] = useState('');
    const handleEmailInput = (event) => {
        const val = event.target.value;
        setError(isValidEmail(val, "Email"));
    };

    const [passwordError, setPasswordError] = useState('');
    const handlePasswordInput = (event) => {
        const val = event.target.value;
        setPasswordError(isValidPassword(val, "Password"));
    }

    const [confirmPasswordError, setConfirmPassword] = useState('');
    const handleConfirmPasswordInput = (event) => {
        const val = event.target.value;
        if (val !== '1') {
            if (val !== document.getElementById('password').value) {
                setConfirmPassword('Passwords do not match');
            } else {
                setConfirmPassword('');
            }
        } else {
            setConfirmPassword('Confirmation is required');
        }

    }
    //Form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        let username = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        const data = {
            username,
            email,
            password,
        };
        console.log("Array"+data);
        console.log("JSON"+JSON.stringify(data))
        try {
            const response = await fetch('http://localhost:9090/user/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Handle successful signup - maybe redirect or show a success message
                alert("Insert success");
            } else {
                // Handle signup error
                const errorMessage = await response.text(); // Get the error message sent by the server
                console.log("Error: " + errorMessage);
            }
        } catch (error) {
            // Handle network errors
            alert(error);

        }
    };
    return (
        <div className="center-div">
            <div className='signup'>
                <div className='signup-1'>
                    <h4 className="g-h-4">Create Account</h4>
                    <p className="g-signup-p">Congratulations on taking the first step towards making a difference</p>
                    <form onSubmit={handleSubmit}>
                        <div className="g-input-field-div-1">
                            <label className='g-lable-1'><i class="fa-regular fa-user g-input-icon-1"></i></label>
                            <input type="text" name="name" id="name" className="g-input-field-1" placeholder="Full Name" />
                        </div>
                        <div className="g-input-field-div-1">
                            <label className='g-lable-1'><i class="fa-regular fa-envelope g-input-icon-1"></i></label>
                            <input type="text" name="email" id="email" className="g-input-field-1" placeholder="Email" onChange={handleEmailInput} />
                            {mailError && <span className='input-error' id="email-error">{mailError}</span>}
                        </div>
                        <div className="g-input-field-div-1">
                            <label className='g-lable-1'><i class="fa-regular fa-lock g-input-icon-1"></i></label>
                            <input type="password" name="password" id="password" className="g-input-field-1" placeholder="Password" onChange={handlePasswordInput} />
                            {passwordError && <span className='input-error' id="password-error">{passwordError}</span>}
                        </div>
                        <div className="g-input-field-div-1">
                            <label className='g-lable-1'><i class="fa-regular fa-lock-keyhole g-input-icon-1"></i></label>
                            <input type="password" name="c-password" id="c-password" className="g-input-field-1" placeholder="Confirm Password" onChange={handleConfirmPasswordInput} />
                            {confirmPasswordError && <span className='input-error' id="confirm-password-error">{confirmPasswordError}</span>}
                        </div>
                        <div className="g-input-field-div-1">
                            <button type='submit' className="g-btn-1">Create Account</button>
                        </div>
                    </form>
                </div>
                <div className='signup-2'>
                    <DonationIcon />
                </div>
            </div>
        </div>
    )
}
export default Signup