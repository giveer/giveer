import './Signin.css';
function Signin() {
    return(
        <div className="center-div">
            <div>
                <h4 className="g-h-4">Create Account</h4>
                <p className="g-signup-p">Congratulations on taking the first step towards making a difference</p>
                <div className="g-input-field-div-1">
                    <label className='g-lable-1'><i class="fa-regular fa-envelope g-input-icon-1"></i></label>
                    <input type="text" name='email' className="g-input-field-1" placeholder='Email' />
                </div>
                <div className="g-input-field-div-1">
                    <label className='g-lable-1'><i class="fa fa-key g-input-icon-1" aria-hidden="true"></i></label>
                    <input type="password" name='password' className="g-input-field-1" placeholder='Password' />
                </div>

                <div className="g-input-field-div-1">
                    <a href="./forget" className="forget-password">Forget Password?</a>
                </div>
                <div className="g-input-field-div-1">
                    <button type="button" className="g-btn-1">Login</button>
                </div>
                <div className="g-input-field-div-1">
                    <div className='or'>
                        <hr className="hrline"></hr><p className='space'>Or</p><hr></hr>
                    </div>
                </div>
                
                <div><p className="for-p">You can also Login through Email OTP</p></div>
                <div className="g-input-field-div-1">
                    <button type="button" className="g-btn-1">OTP Login</button>
                </div>
            </div>
        </div>
    )
}
export default Signin