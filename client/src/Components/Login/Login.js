import React from 'react'
import '../Register/Register.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="register">
            <div className="register__now">
                Sign up
            </div>
            <form >
                <label>Email</label> <br />
                <input id="email" type="email" placeholder="enter your email address" /><br />
                <label>Enter password</label> <br />
                <input id="password" type="password" placeholder="enter your password" /> <br />
                <div className="login">Log in</div><br />
                <div className="redirect__route">Don't have an account <Link to="/register"><b style={{ color: " #58A1A4" }}>sign up</b></Link></div>
            </form>
        </div>
    )
}

export default Login;
