import React from 'react';
import { screen, } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';

describe('Testa a SearchBar', () => {
  test('Verifica se a barra esta na tela e os botões estão na tela ', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const buttonLogin = screen.getByTestId("login-submit-btn");
    userEvent.type(emailInput, 'teste@email.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(buttonLogin)
    const showSearchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(showSearchBtn)
    const searchBar = screen.getByTestId('search-input');
  })

})