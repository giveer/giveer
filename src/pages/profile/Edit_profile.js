import './Edit_profile.css';
import { Link } from 'react-router-dom';

function Edit_profile(){
    return (
        <div className="edit-profile">
            <div className="g-input-field-div-1 edit-phone">
                <label className='g-lable-1'><i className="fa-thin fa-phone phone"></i></label>
                <input type="tel" name='phone' className="g-input-field-1" placeholder='Enter Phone Number'/>
            </div>
        </div>
    );
}

export default Edit_profile;