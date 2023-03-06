/* eslint-disable import/no-unresolved */
import React from 'react';
import '@styles/NotFound.scss';

function NotFound() {
  return (
    <div className="error-container">
      <h1 className="error">404</h1>
      <p className="lorem">Página no encontrada</p>
      <div className="astronaut-container">
        <div className="astronaut-body" />
        <div className="astronaut-helmet">
          <div className="astronaut-glass" />
        </div>
        <div className="astronaut-backpack" />
      </div>
    </div>
  );
}

export default NotFound;
