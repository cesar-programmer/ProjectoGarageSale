/* eslint-disable import/no-unresolved */
import React from 'react';
import '@styles/SendEmail.scss';
import emailImage from '@icons/email.svg';

function RecoveryPasword() {
  return (
    <div className="SendEmail">
      <div className="form-container">
        <h1 className="title">
          Email has been sent!
        </h1>
        <p className="subtitle">
          Plase check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src={emailImage} alt="email" />
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
