import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comingsoon from './pages/coming soon/Comingsoon';

import Signin from './pages/sign in/Signin';
import Signup from './pages/sign up/Signup';
import Testing from './pages/testing/Testing';
import Forgot from './pages/forgot password/Forgot';
import NewPassword from './pages/forgot password/NewPassword';
import Verification from './pages/forgot password/Verification';
import Navbar from './pages/navbar/Navbar';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Comingsoon />
//   </React.StrictMode>
// );

export default function Main() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route path="/" element={<Comingsoon />} />
          <Route path="/index" element={<Navbar />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} /> 
          <Route path="testing" element={<Testing/>} />
          <Route path="forgot" element={<Forgot/>} />
          <Route path="newpassword" element={<NewPassword/>} />
          <Route path="verify" element={<Verification/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
