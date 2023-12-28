import './Signup.css';
import { ReactComponent as DonationIcon } from '../../assets/svg/donation.svg';
// import '../validation/validation.js';
import React, { useState, useReducer} from 'react';
import { isValidEmail, isValidPassword, isValidConfirmPassword } from '../validation/validation'

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

        setConfirmPassword(isValidConfirmPassword(val, "ConfirmPassword"));

    }
    //Password Hide & Show
    const initialState = { //False -> Hide : True -> Show
        passwordState: false,
        cpasswordState: false
    }
    const reducer = (state, action) => {
        switch(action.type){
            case 'PASSWORD':
                if(!state.passwordState){
                    document.getElementById('password').type = 'text';
                }else{
                    document.getElementById('password').type = 'password';
                }
                return {...state, passwordState: !state.passwordState};
            case 'CPASSWORD':
                if(!state.cpasswordState){
                    document.getElementById('c-password').type = 'text';
                }else{
                    document.getElementById('c-password').type = 'password';
                }
                return {...state, cpasswordState: !state.cpasswordState};
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    
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
        <div className="center-div main-signup">
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
                            <input type="text" name="email" id="email" className="g-input-field-1 email" placeholder="Email" onChange={handleEmailInput} />
                            {mailError && <span className='input-error' id="email-error">{mailError}</span>}
                        </div>
                        <div className="g-input-field-div-1">
                            <label className='g-lable-1'><i class="fa-regular fa-lock g-input-icon-1"></i></label>
                            <input type="password" name="password" id="password" className="g-input-field-1" placeholder="Password" onChange={handlePasswordInput} />
                            <span className='password-eye' onClick={()=> dispatch({type: 'PASSWORD'})}><i className={state.passwordState?'fa-regular fa-eye-slash':'fa-regular fa-eye'}></i></span>
                            {passwordError && <span className='input-error' id="password-error">{passwordError}</span>}
                        </div>
                        <div className="g-input-field-div-1">
                            <label className='g-lable-1'><i class="fa-regular fa-lock-keyhole g-input-icon-1"></i></label>
                            <input type="password" name="c-password" id="c-password" className="g-input-field-1" placeholder="Confirm Password" onChange={handleConfirmPasswordInput} />
                            <span className='password-eye' onClick={()=> dispatch({type: 'CPASSWORD'})}><i className={state.cpasswordState?'fa-regular fa-eye-slash':'fa-regular fa-eye'}></i></span>
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