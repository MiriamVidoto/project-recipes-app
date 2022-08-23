import React from 'react';
import { render, screen, } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import Provider from './context/Provider';

describe('Testa a SearchBar', () => {
  test('Verifica se a barra esta na tela e os botões estão na tela ', () => {
    render(<Provider> <App/></Provider>);
    const showSearchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(showSearchBtn);
    const ingredientsSearch = screen.getByTestId('ingredient-search-radio');
    expect(ingredientsSearch).toBeInTheDocument();
    const nameSearch = screen.getByTestId('name-search-radio');
    expect(nameSearch).toBeInTheDocument();
    const firstLetterSearch = screen.getByTestId('first-letter-search-radio');
    expect(firstLetterSearch).toBeInTheDocument(); 
  })
})