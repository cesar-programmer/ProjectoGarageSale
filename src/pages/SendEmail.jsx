import React from 'react';
import '../styles/SendEmail.scss';
import image from '../../public/assets/img/logos/logo_yard_sale.svg';

function RecoveryPasword() {
  return (
    <div className="SendEmail">
      <div className="form-container">
        <img src={image} alt="logo" className="Login-Logo" />
        <h1 className="title">
          Email has been sent!
        </h1>
        <p className="subtitle">
          Plase check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src="./assets/img/icons/email.svg" alt="email" />
        </div>
        <button className="primary-button login-button" type="submit">Login</button>
        <p className="resend">
          <span> Didn`t receive the email</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>

  );
}

export default RecoveryPasword;
