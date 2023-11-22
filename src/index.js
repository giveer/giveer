import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comingsoon from './pages/coming soon/Comingsoon';
import Signin from './pages/login/Signin'
import Signup from './pages/sign up/Singnup';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Comingsoon />
//   </React.StrictMode>
// );

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Comingsoon />} />
          <Route path="login" element={<Signin />} />
          <Route path="signup" element={<Signup />} /> 
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);