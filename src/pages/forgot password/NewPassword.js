import './NewPassword.css';
import { ReactComponent as DonationIcon } from '../../assets/svg/donation.svg';

function NewPassword() {
    return (
        <div className="center-div">
            <div className='newpassword'>
                <div className='newpass-2'>
                    <DonationIcon />
                </div>
                <div className='newpass-1'>
                <h4 className='g-h-4'>New Password</h4>
                <p className='g-p'>Enter New Password</p>
                <form action="#" className='form'>
                    <div className="g-input-field-div-1">
                        <label className='g-lable-1'><i class="fa-regular fa-lock g-input-icon-1"></i></label>
                        <input type="password" name="password" className="g-input-field-1" placeholder="New Password" />
                    </div>
                    <p className='g-p'>Confirm New Password</p>
                    <div className="g-input-field-div-1">
                        <label className='g-lable-1'><i class="fa-regular fa-lock-keyhole g-input-icon-1"></i></label>
                        <input type="password" name="password" className="g-input-field-1" placeholder="Confirm Password" />
                    </div>
                    <div className="g-input-field-div-1">
                        <button type="button" className="g-btn-1">Login</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default NewPassword