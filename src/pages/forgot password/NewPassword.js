import './NewPassword.css';

function NewPassword() {
    return (
        <div className="center-div">
            <div>
                <h4>New Password</h4>
                {/* <div><p>Enter New Password</p></div> */}
                <form action="#">
                    <div className="g-input-field-div-1">
                        <label className='g-lable-1'><i class="fa-regular fa-lock g-input-icon-1"></i></label>
                        <input type="password" name="password" className="g-input-field-1" placeholder="New Password" />
                    </div>
                    {/* <div><p>Confirm New Password</p></div> */}
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
    )
}

export default NewPassword