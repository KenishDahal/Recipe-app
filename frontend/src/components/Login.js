import React, { useState } from 'react';
import API from '../api';
import { Link, useNavigate } from 'react-router-dom';
import "../scss/Login.scss"
import { BsEyeSlash } from "react-icons/bs";


const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/auth/login', formData);
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <div className="loginForm">
    <form className="loginForm__page">
      {/* <div> */}
      <figure>
        {/* <img src={logo}></img> */}
      </figure>
      <div className="loginForm__page--title">Dashboard Kit</div>
      <div className="loginForm__page--login">Log In to Dashboard Kit</div>
      <div className="loginForm__page--label">
        Enter your email and password below
      </div>
      {/* </div>   */}
      <div className="loginForm__page__mainArea">
        <div className="loginForm__page__mainArea__inputHandle">
          <label htmlFor="email">EMAIL</label>
          <input
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="loginForm__page__mainArea__inputHandle">
          <label htmlFor="password">Password </label>
          <input
            // type={passwordShown ? "text" √√: "password"}
            name="password"
            onChange={handleChange}
          />
          {/* <div onClick={togglePassword} className="loginForm__page__mainArea__inputHandle--icon">
            <BsEyeSlash />
          </div> */}
        </div>

        <div className="loginForm__page__mainArea__checkbox">
          <input type="checkbox" id="a" />
          <label htmlFor="a">Remember me</label>
        </div>

        <button onClick={handleSubmit}>Log in</button>

        <div className="loginForm__page__mainArea__signin">
          <div>Don’t have an account?</div>
          
          <Link to={"/register"}>Signup</Link>
        </div>
      </div>
    </form>
  </div>

  );
};

export default Login;



