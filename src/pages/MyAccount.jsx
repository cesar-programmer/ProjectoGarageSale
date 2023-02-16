/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/MyAccount.scss';

function MyAccount() {
  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">Name</label>
            <p className="value">Cesar cordova</p>
            <label htmlFor="email" className="label">Email</label>
            <p className="value">csear@gmail.com</p>
            <label htmlFor="password" className="label">Password</label>
            <p className="value">*********</p>
          </div>
          <input type="submit" value="Edit" className="secondary-button login-button" />
        </form>
      </div>
    </div>
  );
}

export default MyAccount;
