import './Otp_email.css';
import { Link } from 'react-router-dom';
import { ReactComponent as DonationIcon } from '../../assets/svg/donation.svg';

function Otp_email() {
    return (
        <div className="center-div main-otp-email">
            <div className='otpmail'>
                <div className='otpmail-1'>
                    <h4 className='g-h-4'>OTP Signin</h4>
                    <div><p className='giveer-p'>Enter the Registered Email Address</p></div>
                    <form action="./Otp_verify.js">
                        <div className="g-input-field-div-1">
                            <label className='g-lable-1'><i class="fa-regular fa-envelope g-input-icon-1"></i></label>
                            <input type="text" name="email" className="g-input-field-1" placeholder="Email" />
                        </div>
                        <div className='bts'>
                            <Link to='/signin' className='bts'>Back to Signin</Link>
                        </div>
                        <div className="g-input-field-div-1">
                            <button type="button" className="g-btn-1">Send</button>
                        </div>
                    </form>
                </div>
                <div className='otpmail-2'>
                    <DonationIcon />
                </div>
            </div>
        </div >
    );
}

export default Otp_email