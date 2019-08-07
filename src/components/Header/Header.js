import React, { Component } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

export default class HeaderContent extends Component {
  render() {
    return (
      <AuthConsumer>
        {({ email, logout, isAuthorized }) =>
          isAuthorized ? (
            <div className="header-menu">
              <p className="header-menu__email header-email t-header-email">
                {email}
              </p>
              <Button onClick={logout} className="header-menu__button t-logout">
                Выйти
              </Button>
            </div>
          ) : null
        }
      </AuthConsumer>
    );
  }
}
