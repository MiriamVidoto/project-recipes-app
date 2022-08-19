import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import './style/login.css';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const passwordLength = 6;
    if (!!regex.test(email) && password.length > passwordLength) {
      return setIsDisabled(false);
    }
  }, [email, password]);

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const routeFoods = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    history.push('/foods');
  };

  return (
    <form className="container">
      <label htmlFor="email">
        Email:
        <input
          id="email"
          type="email"
          className="inputLogin"
          placeholder="type your email..."
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ handleEmail }
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          id="password"
          type="password"
          className="inputLogin"
          placeholder="type your password..."
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ handlePassword }
        />
      </label>
      <button
        type="button"
        className="buttonLogin"
        data-testid="login-submit-btn"
        disabled={ isDisabled }
        onClick={ routeFoods }
      >
        Enter
      </button>
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
