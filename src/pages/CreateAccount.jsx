/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/CreateAccount.scss';

function CreateAccount() {
  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">Name</label>
            <input type="text" id="name" placeholder="cesar" className="input input-name" />
            <label htmlFor="email" className="label">Email</label>
            <input type="text" id="email" placeholder="cesar@example.com" className="input input-email" />
            <label htmlFor="password" className="label">Password</label>
            <input type="password" id="password" placeholder="*********" className="input input-password" />
          </div>
          <input type="submit" value="Create" className="primary-button-create login-button" />
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
