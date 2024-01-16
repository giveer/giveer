import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Comingsoon from './pages/coming soon/Comingsoon';
import Signin from './pages/sign in/Signin';
import Signup from './pages/sign up/Signup';
import Signup2 from './pages/sign up/Signup2';
import Testing from './pages/testing/Testing';
import Forgot from './pages/forgot password/Forgot';
import NewPassword from './pages/forgot password/NewPassword';
import Navbar from './pages/navbar/Navbar';
import Otp_email from './pages/otp sign in/Otp_email';
import Home from './pages/Home/Home';
import Otp_verify from './pages/otp sign in/Otp_verify';
import Otp_verify2 from './pages/otp sign in/Otp_verify2';
import NoPageFound from './pages/404/NoPageFound';
import Profile from './pages/profile/Profile';
import Edit_profile from './pages/profile/Edit_profile';
import Product_post from './pages/product posted/Product_post';
import Search from './pages/Search/Search';
import Favorite from './pages/Icons/Favorite';
import HomeFooter from './pages/Footer/HomeFooter';
import Product from './pages/Product Page/Product';

// Component for rendering HomeFooter based on the route
const RenderFooter = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/index';
  return isHomePage ? <HomeFooter /> : null;
};

const RenderNavbar = () => {
  const location = useLocation();
  if(location.pathname === '/' || location.pathname === '/index'){
    return <Navbar />
  }
}

export default function Main() {
  return (
    <Router>
      <div>
        <RenderNavbar />
        <Routes>
            <Route path="/" element={<Comingsoon />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/index" element={<Home />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} /> 
            <Route path="signup2" element={<Signup2 />} /> 
            <Route path="testing" element={<Testing/>} />
            <Route path="forgot" element={<Forgot/>} />
            <Route path="newpassword" element={<NewPassword/>} />
            <Route path="otpemail" element={<Otp_email/>} />
            <Route path="otpverify" element={<Otp_verify/>} />
            <Route path="otpverify2" element={<Otp_verify2/>} />
            <Route path="*" element={<NoPageFound />} />
            <Route path="profile" element={<Profile/>} />
            <Route path="eprofile" element={<Edit_profile/>} />
            <Route path="productpost" element={<Product_post/>} />
            <Route path="search" element={<Search />} />
            <Route path="icon" element={<Favorite />} />
            <Route path="product" element={<Product />} />
        </Routes>
        <RenderFooter />
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);