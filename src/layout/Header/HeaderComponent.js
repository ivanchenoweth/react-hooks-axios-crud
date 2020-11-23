import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../stories/Button';
import './header.css';

export const HeaderComponent = ({ user, onLogin, onLogout, onCreateAccount, appName }) => (
  <header>
    <div className="wrapper">
      <div>        
        <h1>{appName}</h1>
      </div>
      <div>
        {user ? (
          <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

HeaderComponent.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

HeaderComponent.defaultProps = {
  user: null,
};
