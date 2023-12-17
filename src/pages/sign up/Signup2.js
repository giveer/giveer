import './Signup.css';
import { ReactComponent as DonationIcon } from '../../assets/svg/donation.svg';
// import '../validation/validation.js';
import React, { useState, useReducer} from 'react';
import { isValidEmail, isValidPassword, isValidConfirmPassword } from '../validation/validation'

function Signup2() {
    
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
    // const initialState = { //False -> Hide : True -> Show
    //     passwordState: false,
    //     cpasswordState: false
    // }
    // const reducer = (state, action) => {
    //     switch(action.type){
    //         case 'PASSWORD':
    //             if(!state.passwordState){
    //                 document.getElementById('password').type = 'text';
    //             }else{
    //                 document.getElementById('password').type = 'password';
    //             }
    //             return {...state, passwordState: !state.passwordState};
    //         case 'CPASSWORD':
    //             if(!state.cpasswordState){
    //                 document.getElementById('c-password').type = 'text';
    //             }else{
    //                 document.getElementById('c-password').type = 'password';
    //             }
    //             return {...state, cpasswordState: !state.cpasswordState};
    //         default:
    //             return state
    //     }
    // }
    // const [state, dispatch] = useReducer(reducer, initialState);





    // const [password, setPassword] = useState(false);

    // const passwordIcon = ()=>{
    //     setPassword(!password);
    //     if(password){
    //         document.getElementById('password').type = 'text';
    //     }else{
    //         document.getElementById('password').type = 'password';
    //     }
    //     console.log(password);
    // }

    const initialvalue = {
        password: true,
        cpassword: true
    }
   
    const reducer = (state, action)=>{
        // console.log(action.type);
        console.log(state.password);
        console.log(state.cpassword);
        switch(action.type){
            
            case 'PASSWORD':
                return{...state, password: !state.password};
            case 'CPASSWORD':
                return{...state, cpassword: !state.cpassword};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialvalue)
    return (
        <div className="center-div">
            <div className='signup'>
                <div className='signup-1'>
                    <form>
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
                            <input type={state.password?'password':'text'} name="password" id="password" className="g-input-field-1" placeholder="Password" onChange={handlePasswordInput} />
                            <span className='password-eye' onClick={()=>dispatch({type:'PASSWORD'})}><i class={state.password?'fa-regular fa-eye':'fa-regular fa-eye-slash'}></i></span>
                            {passwordError && <span className='input-error' id="password-error">{passwordError}</span>}
                        </div>
                        <div className="g-input-field-div-1">
                            <label className='g-lable-1'><i class="fa-regular fa-lock-keyhole g-input-icon-1"></i></label>
                            <input type={state.cpassword?'password':'text'} name="c-password" id="c-password" className="g-input-field-1" placeholder="Confirm Password" onChange={handleConfirmPasswordInput} />
                            <span className='password-eye' onClick={()=>dispatch({type:'CPASSWORD'})}><i class={state.cpassword?'fa-regular fa-eye':'fa-regular fa-eye-slash'}></i></span>
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
export default Signup2