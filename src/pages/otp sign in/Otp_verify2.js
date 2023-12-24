import './Otp_verify.css';
import { ReactComponent as DonationIcon } from '../../assets/svg/donation.svg';
import { useRef, useEffect } from 'react';

function Otp_verify2() {
    //document.getElementsByClassName('otp-input')[0].facus();


  useEffect(() => {
    document.getElementsByClassName('otp-input')[0].focus(); // Focus after component mounts
  }, []);
    const otpFunction = (value, keyCode) => {
        let prevInput = document.getElementsByClassName(' otp-input')[value-2];
        let currentInput = document.getElementsByClassName('otp-input')[value-1];
        let nextInput = document.getElementsByClassName('otp-input')[value];
        let maxLenght = document.getElementById('otp-max-length').value;
        if(keyCode == 8){
            if(value==1){
                currentInput.disabled=false;
                currentInput.focus();
            }else{
                currentInput.value = '';
                currentInput.disabled = true;
                prevInput.disabled = false;
                prevInput.focus();
            }
        }else if (!isNaN(currentInput.value) && currentInput.value!='' && value<=maxLenght) {
            console.log("else if");
            if(currentInput.value.length==1 && value<maxLenght){
                console.log("else if if");
                currentInput.disabled = true;
                nextInput.disabled = false;
                nextInput.focus();
            }
        }else {
                currentInput.value='';
        }
    }
    const handleKeyUp = (event, value) => {
        const keyCode = event.keyCode || event.which;
        otpFunction(value, keyCode);
    };
    const handleChange = (event) => {
        const newValue = event.target.value.slice(0, 1); // Limit to 1 character
        event.target.value=newValue;
      };
    return (
        <div className="center-div">
            <div className='container'>
                <div className="container-1">
                    <h4 className='g-h-4'>Enter OTP Code</h4>
                    <form action="">
                        <div className="input-field">
                            <input className="num otp-input" type="number" onKeyUp={(event) => handleKeyUp(event, 1)} onChange={handleChange} />
                            <input className="num otp-input" type="number" onKeyUp={(event) => handleKeyUp(event, 2)} onChange={handleChange} disabled />
                            <input className="num otp-input" type="number" onKeyUp={(event) => handleKeyUp(event, 3)} onChange={handleChange} disabled />
                            <input className="num otp-input" type="number" onKeyUp={(event) => handleKeyUp(event, 4)} onChange={handleChange} disabled />
                            <input className="num otp-input" type="number" onKeyUp={(event) => handleKeyUp(event, 5)} onChange={handleChange} disabled />
                            <input className="num otp-input" type="number" onKeyUp={(event) => handleKeyUp(event, 6)} onChange={handleChange} disabled />
                            <input id='otp-max-length' type='hidden' value={6}/>
                        </div>
                        <div className="g-input-field-div-1">
                            <button type="submit" className='g-btn-1'>Verify OTP</button>
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