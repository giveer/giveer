import './Signin.css';
import { ReactComponent as DonationIcon } from '../../assets/svg/donation.svg';

function Signin() {
    return (
        <div className="center-div main-signin">
            <div className="signin">
                <div className="signin-1">
                    <h4 className="g-h-4">Signin here</h4>
                    <p className="g-signin-p">Congratulations on taking the first step towards making a difference</p>
                    <div className="g-input-field-div-1">
                        <label className='g-lable-1'><i class="fa-regular fa-envelope g-input-icon-1"></i></label>
                        <input type="text" name='email' className="g-input-field-1" placeholder='Email' />
                    </div>
                    <div className="g-input-field-div-1">
                        <label className='g-lable-1'><i class="fa fa-key g-input-icon-1" aria-hidden="true"></i></label>
                        <input type="password" name='password' className="g-input-field-1" placeholder='Password' />
                    </div>
                    <div className="g-input-field-div-1">
                        <a href="./forgot" className="forget-password">Forget Password?</a>
                    </div>
                    <div className="g-input-field-div-1">
                        <button type="button" className="g-btn-1">Signin</button>
                    </div>
                    <div className="g-input-field-div-1">
                        <div className='or'>
                            <hr className="hrline"></hr><p className='space'>Or</p><hr></hr>
                        </div>
                    </div>

                    <a href="./otpemail" className='otplog g-signin-p'>You can also Signin through Email OTP</a>
                    {/* <div className="g-input-field-div-1">
                        <button type="button" className="g-btn-1">OTP Login</button>
                    </div> */}
                </div>
                <div className='signin-2'>
                    <DonationIcon />
                </div>
            </div>
        </div>
    )
}
export default Signin