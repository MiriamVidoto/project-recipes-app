import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Testando o componente Header', () => {
  test('Testando compoentes em tela', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/foods');
    const header = await screen.findByTestId('page-title');
    const profileBtn = await screen.findByTestId('profile-top-btn');
    const showSearchBtn = await screen.findByTestId('search-top-btn');
    expect(header).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
    expect(showSearchBtn).toBeInTheDocument();
  });

  test('Testa se quando clicar no profile é redirecionado pra pagina correta', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    const profileBtn = await screen.findByTestId('profile-top-btn');
    userEvent.click(profileBtn);
    expect(history.location.pathname).toBe('/profile');
  });

  test('Clica no botao search e verifica se habilita a barra de pesquisa ', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    const showSearchBtn = await screen.findByTestId('search-top-btn');
    userEvent.click(showSearchBtn)
    const searchInput = await screen.findByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
    userEvent.click(showSearchBtn)
    expect(searchInput).not.toBeInTheDocument();
  });
});