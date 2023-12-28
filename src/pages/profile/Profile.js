import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div className='main'>
            <div className='profile-svg'>
                <div className='profile-div1'>
                    <span className='profile-span'><i className="fa-solid fa-user profile-icon-image"></i></span>
                </div>
                <div className='profile-div2'>
                    <p className='user-name'>User Name</p>
                    <p className='user-email'>useremail@gmail.com</p>
                    <Link to='' className='edit-profile'>Edit Profile <span><i class="fa-light fa-circle-chevron-right"></i></span></Link>
                </div>
            </div>
            <div className='tri-dbf'>
                <Link to=''>
                    <div className='donate'>
                        <span><i class="fa-thin fa-hand-holding-heart donate-icon"></i></span>
                        <p>Donated</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className='benefit'>
                        <span><i class="fa-thin fa-gift gift-icon"></i></span>
                        <p>Benefited</p>
                    </div>
                </Link>
                <Link to='/signin'>
                    <div className='fav'>
                        <span><i className="fa-thin fa-heart favourite-icon"></i></span>
                        <p>Favourite</p>
                    </div>
                </Link>
            </div>
            <div className='profile-menu'>
                <ul>
                    <li>
                        <Link to=''><div className='separate'><span><i className="fa-regular fa-user-pen pen"></i>Edit Profile</span><span><i class="fa-regular fa-chevron-right"></i></span></div></Link>
                    </li>
                    <li>
                        <Link to=''><div className='separate'><span><i className="fa-regular fa-book-heart book"></i>Product Posted</span><span><i class="fa-regular fa-chevron-right"></i></span></div></Link>
                    </li>
                    <li>
                        <Link to=''><div className='separate'><span><i className="fa-regular fa-cart-shopping cart"></i>Product Brought</span><span><i class="fa-regular fa-chevron-right"></i></span></div></Link>
                    </li>
                    <li>
                        <Link to=''><div className='separate'><span><i className="fa-regular fa-heart heart"></i>Favourite</span><span><i class="fa-regular fa-chevron-right"></i></span></div></Link>
                    </li>
                    <li>
                        <Link to=''><div className='separate'><span><i className="fa-regular fa-comments comments"></i>Chats</span><span><i class="fa-regular fa-chevron-right"></i></span></div></Link>
                    </li>
                    <li>
                        <Link to=''><div className='separate'><span><i className="fa-regular fa-arrow-right-from-bracket arw"></i>Logout</span><span><i class="fa-regular fa-chevron-right"></i></span></div></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Profile;