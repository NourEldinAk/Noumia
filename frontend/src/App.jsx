import { useEffect } from 'react'
import {  Routes,Route, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

import './App.css'
import Home from './containers/Home'
import Login from './components/Login';
import { fetchUser } from './utils/fetchUser';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();
    if (!user) navigate('/login')
  }, [])
  

  return (
    <>
    <GoogleOAuthProvider clientId="716081408028-gq043b3r8h8papu36itoq1d8nrpgavpb.apps.googleusercontent.com">

    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path='/*' element={<Home/>}/>
    </Routes>
    </GoogleOAuthProvider>,
    </>
  )
}

export default App
