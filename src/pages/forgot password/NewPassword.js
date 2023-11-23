function NewPassword() {
    return (
        <div className="center-div">
            <div>
                <h1>New Password</h1>
                <div><p>Enter New Password</p></div>
                <form action="#">
                    <i class="fa fa-key" aria-hidden="true"></i>
                    <input type="text" className="newpass"></input>
                    <div><p>Confirm New Password</p></div>
                    <i class="fa fa-key" aria-hidden="true"></i>
                    <input type="password" className="confnewpass"></input>
                    <input type="button" value="Submit"></input>
                </form>
            </div>
        </div>
    )
}

export default NewPassword