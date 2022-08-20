import React from 'react';
import { screen, } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';

describe('Testa a página de Login.', () => {
  test('Verifica se existe um input de e-mail na tela', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId("email-input");
    expect(emailInput).toBeInTheDocument();
  })
  test('Verifica se existe um input de password na tela', () => {
    renderWithRouter(<App />);
    const passwordInput = screen.getByTestId("password-input");
    expect(passwordInput).toBeInTheDocument();
  })
  test('Verifica se existe um botão para entrar na tela e o seu funcionamento', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const buttonLogin = screen.getByTestId("login-submit-btn");
    expect(buttonLogin).toBeDisabled;

    userEvent.type(emailInput, 'teste@email.com');
    expect(buttonLogin).toBeDisabled();

    userEvent.type(emailInput, 'teste@');
    userEvent.type(passwordInput, '1234567');
    expect(buttonLogin).toBeDisabled();
  })
  test('Verifica se o usuário é redirecionado para a página de receitas de comidas', () => {
    const { history } = renderWithRouter(<App />);
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const buttonLogin = screen.getByTestId("login-submit-btn");
    expect(buttonLogin).toBeDisabled();
    
    userEvent.type(emailInput, 'teste@email.com');
    userEvent.type(passwordInput, '1234567');
    expect(buttonLogin).toBeEnabled();
    userEvent.click(buttonLogin);
    const { pathname } = history.location;
    expect(pathname).toBe('/foods');
  })
})