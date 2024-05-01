import React from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

const Login = () => {
  return (
    <div>
      <GoogleLogin />
    </div>
  )
}

export default Login