import React from 'react';
import './login.css'

function Login() {
  return (
   <>
        <form className='loginform'>
            <h3>Login Here</h3>
    
            <label className="loginlabel" htmlFor="username">Username</label>
            <input className="logininput" type="text" placeholder="Email or Phone" id="username" required/>
    
            <label className="loginlabel" htmlFor="password">Password</label>
            <input className="logininput" type="password" placeholder="Password" id="password" required/>
    
            <button className='loginbutton'>Log In</button>
            <div class="social">
                <div class="go"><i class="fab fa-google"></i> Google</div>
                <div class="fb"><i class="fab fa-facebook"></i> Facebook</div>
            </div>
        </form>
    </>
  )
}

export default Login;