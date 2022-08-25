import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mealsByIngredient from "../../cypress/mocks/mealsByIngredient";
import oneDrink from "../../cypress/mocks/oneDrink"
import App from "../App"
import { useContext } from 'react'
import renderWithRouter from "../tests/helpers/renderWithRouter";

describe('Testando o componente SearchBar Foods', () => {
  test('Verifica se o input e botões do SearchBar são renderizados', async () => {
    const { history } = renderWithRouter(<useContext><App /></useContext>);
    history.push('/foods');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/foods');

    const showSearchBtn = await screen.findByTestId('search-top-btn');
    expect(showSearchBtn).toBeInTheDocument();
    userEvent.click(showSearchBtn);
    const searchInput = await screen.findByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
    const ingredientOption = screen.getByTestId('ingredient-search-radio');
    expect(ingredientOption).toBeInTheDocument();
    const execSearchButton = screen.getByTestId('exec-search-btn');
    expect(execSearchButton).toBeInTheDocument();
    const drinksPage = await screen.findByTestId('drinks-bottom-btn');
    expect(drinksPage).toBeInTheDocument();
    userEvent.click(drinksPage);
  });
  test('Verifica o funcionamento da busca de ingredientes por categoria', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mealsByIngredient),
    });
    jest.spyOn(global, 'alert').mockImplementation(() => {});

    const { history } = renderWithRouter(<useContext><App /></useContext>);
    history.push('/foods');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/foods');

    const showSearchBtn = await screen.findByTestId('search-top-btn');
    expect(showSearchBtn).toBeInTheDocument();
    userEvent.click(showSearchBtn);
    const searchInput = await screen.findByTestId('search-input');
    const ingredientOption = screen.getByTestId('ingredient-search-radio');
    const execSearchButton = screen.getByTestId('exec-search-btn');

    userEvent.type(searchInput, 'Vegetarian');
    userEvent.click(ingredientOption);
    userEvent.click(execSearchButton);

    const ingredientsResult = screen.findAllByRole('link');
    expect((await ingredientsResult).length).toBe(12);
  });
  test('Verifica o funcionamento da busca pelo nome', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mealsByIngredient),
    });
    jest.spyOn(global, 'alert').mockImplementation(() => {});

    const { history } = renderWithRouter(<useContext><App /></useContext>);
    history.push('/foods');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/foods');

    const showSearchBtn = await screen.findByTestId('search-top-btn');
    expect(showSearchBtn).toBeInTheDocument();
    userEvent.click(showSearchBtn);
    const searchInput = await screen.findByTestId('search-input');
    const nameOption = screen.getByTestId('name-search-radio');
    const execSearchButton = screen.getByTestId('exec-search-btn');

    userEvent.type(searchInput, 'onion');
    userEvent.click(nameOption);
    userEvent.click(execSearchButton);

    const nameResult = screen.findAllByRole('link');
    expect((await nameResult).length).toBe(12);
  });
  test('Verifica o funcionamento da busca pela primeira letra', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mealsByIngredient),
    });
    jest.spyOn(global, 'alert').mockImplementation(() => {});

    const { history } = renderWithRouter(<useContext><App /></useContext>);
    history.push('/foods');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/foods');

    const showSearchBtn = await screen.findByTestId('search-top-btn');
    expect(showSearchBtn).toBeInTheDocument();
    userEvent.click(showSearchBtn);
    const searchInput = await screen.findByTestId('search-input');
    const firstLetterOption = screen.getByTestId('first-letter-search-radio');
    const execSearchButton = screen.getByTestId('exec-search-btn');

    userEvent.type(searchInput, 'c');
    userEvent.click(firstLetterOption);
    userEvent.click(execSearchButton);

    const firstLetterResult = screen.findAllByRole('link');
    expect((await firstLetterResult).length).toBe(12);
  });
});
