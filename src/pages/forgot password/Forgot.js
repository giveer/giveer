function Forgot() {
    return (
        <div className="center-div">
            <div>
                <h1>Forgot Password</h1>
                <div className=""><p>Enter Registered Email Address</p></div>
                <label><i class="fa-regular fa-envelope"></i></label>
                <input type="text" className="forgotemail"></input>
                <a href="#">Back to Signin</a>
                <input type="button" className="forgotemailbtn" value="Send"></input>
                <p>Or</p>
                <div className='icon'>
                    <label><i class="fa-brands fa-google"></i></label>
                    <label></label>
                </div>
            </div>
        </div>
    );
}

export default Forgot