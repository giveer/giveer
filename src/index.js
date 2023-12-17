import React from 'react';
import ReactDOM from 'react-dom/client';
//import {Switch } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, Switch} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Comingsoon />
//   </React.StrictMode>
// );
//Routes
export default function Main() {
  return (
    <Router>
      <div>
        <Navbar />
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
        </Routes>
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
