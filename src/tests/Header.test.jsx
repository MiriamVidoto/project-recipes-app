import React from 'react';
import { getByTestId, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

const searchInputId = 'search-input';
const userBtnId = 'profile-top-btn';
const showSearchBtnId = 'search-top-btn';

describe('Testando o componente Header', () => {
  test('Testando compoentes em tela', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const buttonLogin = screen.getByTestId("login-submit-btn");
    userEvent.type(emailInput, 'teste@email.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(buttonLogin)
    const header = screen.getByTestId('page-title');
    const profileBtn = screen.getByTestId(userBtnId);
    const showSearchBtn = screen.getByTestId(showSearchBtnId);
    expect(header).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
    expect(showSearchBtn).toBeInTheDocument();
  });

  test('Testa se quando clicar no profile é redirecionado pra pagina correta', () => {
    const { history } = renderWithRouter(<App />);
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const buttonLogin = screen.getByTestId("login-submit-btn");
    userEvent.type(emailInput, 'teste@email.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(buttonLogin)
    const profileBtn = screen.getByTestId(userBtnId);
    userEvent.click(profileBtn);
    expect(history.location.pathname).toBe('/profile');
  });

  test('Clica no botao search e verifica se habilita a barra de pesquisa ', () => {
    const { history } = renderWithRouter(<App />);
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const buttonLogin = screen.getByTestId("login-submit-btn");
    userEvent.type(emailInput, 'teste@email.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(buttonLogin)
    const showSearchBtn = screen.getByTestId(showSearchBtnId);
    userEvent.click(showSearchBtn)
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
    userEvent.click(showSearchBtn)
    expect(searchInput).not.toBeInTheDocument();
  });

});