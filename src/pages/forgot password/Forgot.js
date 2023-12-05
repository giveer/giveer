import './Forgot.css'
import { ReactComponent as DonationIcon } from '../../assets/svg/donation.svg';

function Forgot() {
    return (
        <div className="center-div">
            <div className='forgot'>
                <div className='forgot-1'>
                    <DonationIcon />
                </div>
                <div className='forgot-2'>
                    <h4 className='g-h-4'>Forgot Password</h4>
                    <div><p className='giveer-p'>Enter Registered Email Address</p></div>
                    <div className="g-input-field-div-1">
                        <label className='g-lable-1'><i class="fa-regular fa-envelope g-input-icon-1"></i></label>
                        <input type="text" name="email" className="g-input-field-1" placeholder="Email" />
                    </div>
                    <div className='bts'>
                        <a className='bts' href="login">Back to Signin</a>
                    </div>
                    <div className="g-input-field-div-1">
                        <button type="button" className="g-btn-1">Send</button>
                    </div>
                    <div className='or'>
                        <hr></hr><h5 className='g-h-5'>Or</h5><hr></hr>
                    </div>
                    <div className='newuser'>
                        <a className='newuser' href="signup">New User?</a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Forgot