/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import '@styles/Login.scss';

function Login() {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // prevent default es para evitar los eventos por defecto y que se espere la confirmacion de los datos
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">Email address</label>
          <input type="text" name="email" placeholder="Example@example.com" className="input input-email" />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" placeholder="*********" className="input input-password" />
          <button className="primary-button login-button" onClick={handleSubmit}>Log in </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
}

export default Login;
