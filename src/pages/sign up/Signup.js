import './Signup.css'
function Signup() {
    return(
        <div className="center-div">
            <div>
                <h4 className="g-h-4">Create Account</h4>
                <p className="g-signup-p">Congratulations on taking the first step towards making a difference</p>
                <div className="g-input-field-div-1">
                    <label className='g-lable-1'><i class="fa-regular fa-user g-input-icon-1"></i></label>
                    <input type="text" name="name" className="g-input-field-1" placeholder="Full Name"/>
                </div>
                <div className="g-input-field-div-1">
                    <label className='g-lable-1'><i class="fa-regular fa-envelope g-input-icon-1"></i></label>
                    <input type="text" name="email" className="g-input-field-1" placeholder="Email"/>
                </div>
                <div className="g-input-field-div-1">
                    <label className='g-lable-1'><i class="fa-regular fa-lock g-input-icon-1"></i></label>
                    <input type="password" name="password" className="g-input-field-1" placeholder="Password"/>
                </div>
                <div className="g-input-field-div-1">
                    <label className='g-lable-1'><i class="fa-regular fa-lock-keyhole g-input-icon-1"></i></label>
                    <input type="password" name="c-password" className="g-input-field-1" placeholder="Confirm Password"/>
                </div>
                <div className="g-input-field-div-1">
                    <button className="g-btn-1">Create Account</button>
                </div>
            </div>
        </div>
    )
}
export default Signup