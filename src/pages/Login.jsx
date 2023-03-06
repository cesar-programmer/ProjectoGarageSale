/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '@styles/Login.scss';

function Login() {
  return (
    <div className="Login">
      <div className="Login-container">
        <form action="/" className="form">
          <label htmlFor="email" className="label">Email address</label>
          <input type="text" id="email" placeholder="Example@example.com" className="input input-email" />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" id="password" placeholder="*********" className="input input-password" />
          <input type="submit" value="Log in" className="primary-button login-button" />
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
}

export default Login;
