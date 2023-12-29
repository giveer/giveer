import './Edit_profile.css';
import { Link } from 'react-router-dom';

function Edit_profile(){
    return (
        <div className="edit-profile main-edit-profile">
            <div className='topic'>
                <span className='span1'><Link to='/profile'><i class="fa-regular fa-arrow-left"></i></Link></span><span className='span2'>Edit Profile</span>
            </div>
            <div className="g-input-field-div-1">
                <label className='g-lable-1'><i className="fa-regular fa-phone g-input-icon-1"></i></label>
                <input type="tel" maxLength='10' name='mobile' className="g-input-field-1" placeholder='Enter Phone Number'/>
            </div>
            <div className="g-input-field-div-1">
                <label className='g-lable-1'><i class="fa-regular fa-address-book g-input-icon-1"></i></label>
                <input type="text" name='address1' className="g-input-field-1" placeholder='Address Line 1'/>
            </div>
            <div className="g-input-field-div-1">
                <label className='g-lable-1'><i class="fa-regular fa-location-dot g-input-icon-1"></i></label>
                <input type="text" name='address2' className="g-input-field-1" placeholder='Address Line 2'/>
            </div>
            <div className="g-input-field-div-1">
                <label className='g-lable-1'><i class="fa-regular fa-globe g-input-icon-1"></i></label>
                <input type="text" name='district' className="g-input-field-1" placeholder='District'/>
            </div>
            <div className="g-input-field-div-1">
                <label className='g-lable-1'><i class="fa-regular fa-map-pin g-input-icon-1"></i></label>
                <input type="text" name='pin' className="g-input-field-1" placeholder='Pincode'/>
            </div>
            <div className="g-input-field-div-1">
                <button type="button" className="g-btn-1">Save</button>
            </div>
        </div>
    );
}

export default Edit_profile;