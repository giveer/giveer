import './Otp_verify.css';
import { ReactComponent as DonationIcon } from '../../assets/svg/donation.svg';
import {useEffect} from 'react';

function Otp_verify2() {
    // Using useEffect because directly using focus will run before component rendering, so it will show an error, so using useEffect will run below code after component rendering.
    // onload, it will focus the first input box.
    useEffect(() => {
        document.getElementsByClassName('otp-input')[0].focus(); // Focus after component mounts
    }, []);
    // Every time the user types in input, this function will be called.
    const otpFunction = (value, keyCode) => {
        let prevInput = document.getElementsByClassName(' otp-input')[value - 2];
        let currentInput = document.getElementsByClassName('otp-input')[value - 1];
        let nextInput = document.getElementsByClassName('otp-input')[value];
        let maxLenght = document.getElementById('otp-max-length').value;
        // When the user clicks Backspace, this if conditin is executed.
        if (keyCode == 8) { // Backspace KeyCode is 8
            // If the user enters the first input, the focus does not go to the previous input. Because there is no previous input.
            if (value == 1) {
                currentInput.disabled = false;
                currentInput.focus();
            }
            else {
                currentInput.value = '';
                currentInput.disabled = true;
                prevInput.disabled = false;
                prevInput.focus();
            }
        }
        // We need to check! isNaN(currentInput.value) -> This is number or not && currentInput.value != '' -> value is not empty && currentInput length must be 1 && value is less than max input field number.
        else if (!isNaN(currentInput.value) && currentInput.value != '' && currentInput.value.length == 1 && value < maxLenght) {
            currentInput.disabled = true;
            nextInput.disabled = false;
            nextInput.focus();
        }
    }
    const handleKeyUp = (event, value) => {
        //Get keyCode
        const keyCode = event.keyCode || event.which;
        otpFunction(value, keyCode);
    };
    // This function will allow only one number per input.
    const handleChange = (event) => {
        const newValue = event.target.value.slice(0, 1); // Limit to 1 character
        event.target.value = newValue;
    };
    const validate = (event) => {
        event.preventDefault();
        let otp, otpstr='';
        for(let i=0;i<(document.getElementById('otp-max-length').value);i++){
            if(document.getElementsByClassName('otp-input')[i].value!=''){
                otpstr += document.getElementsByClassName('otp-input')[i].value;
            }else{
                console.log("else");
                document.getElementsByClassName('otp-input')[i].style.border = '2px solid red';
            }
        }
        otp = parseInt(otpstr);
        console.log('OTP is ', otp);

        if(otpstr.length==document.getElementById('otp-max-length').value){
            //API call...
        }

    }
    return (
        <div className="center-div">
            <div className='container'>
                <div className="container-1">
                    <h4 className='g-h-4'>Enter OTP Code</h4>
                    <form>
                        <div className="input-field">
                            <input className="num otp-input" type="number" onKeyUp={(event) => handleKeyUp(event, 1)} onChange={handleChange} />
                            <input className="num otp-input" type="number" onKeyUp={(event) => handleKeyUp(event, 2)} onChange={handleChange} disabled />
                            <input className="num otp-input" type="number" onKeyUp={(event) => handleKeyUp(event, 3)} onChange={handleChange} disabled />
                            <input className="num otp-input" type="number" onKeyUp={(event) => handleKeyUp(event, 4)} onChange={handleChange} disabled />
                            <input className="num otp-input" type="number" onKeyUp={(event) => handleKeyUp(event, 5)} onChange={handleChange} disabled />
                            <input className="num otp-input" type="number" onKeyUp={(event) => handleKeyUp(event, 6)} onChange={handleChange} disabled />
                            <input id='otp-max-length' type='hidden' value={6} />
                        </div>
                        <div className="g-input-field-div-1">
                            <button type="submit" className='g-btn-1' onClick={validate}>Verify OTP</button>
                        </div>
                    </form>
                    <div className='bts'>
                        <a className='bts' href="signin">Back to Signin</a>
                    </div>
                </div>
                <div className='container-2'>
                    <DonationIcon />
                </div>
            </div>
        </div>
    );
}

export default Otp_verify2;