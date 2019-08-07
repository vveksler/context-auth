import React, { PureComponent } from 'react';

const user = {
  email: 'stu@dent.com',
  password: '123'
};

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    authorizeError: '',
    isAuthorized: ''
  };

  authorize = (email, password) => {
    if (email === user.email && password === user.password) {
      this.setState({
        email,
        isAuthorized: true,
        authorizeError: ''
      });
    } else {
      this.setState({
        authorizeError: 'Email или пароль введён не верно'
      });
    }
  };

  logout = () => {
    this.setState({
      isAuthorized: false
    });
  };

  getProviderValue = () => {
    const { email, authorizeError, isAuthorized } = this.state;

    return {
      email,
      authorizeError,
      isAuthorized,
      logout: this.logout,
      authorize: this.authorize
    };
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
