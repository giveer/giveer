function Signup() {
    return(
        <div className="center-div">
            <div>
                <h5>Create Account</h5>
                <p>Congratulations on taking the first step towards making a difference!</p>
                <div className="g-input-field-div">
                    <label><i class="fa-regular fa-user"></i></label>
                    <input type="text" name="name" className="g-input-field" placeholder="Full Name"/>
                </div>
                <div className="g-input-field-div">
                    <label><i class="fa-regular fa-envelope"></i></label>
                    <input type="text" name="email" className="g-input-field" placeholder="Email"/>
                </div>
            </div>
        </div>
    )
}
export default Signup
