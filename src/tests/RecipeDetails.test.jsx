import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import renderWithRouter from '../tests/helpers/renderWithRouter';
import App from '../App';
import { useContext } from 'react'

describe('Testando a página Recipe Details', () => {
  delete global.window.location;
  global.window = Object.create(window);
  global.window.location = {
    reload: jest.fn(),
    pathname: '/foods',
  };

  test('1 - Testa se as informações da receita de comida são exebidas corretamente', async () => {
    const { history } = renderWithRouter(<useContext><App /></useContext>);
    history.push('/foods/53060');

    const recipePhoto =  await screen.findByTestId('recipe-photo');
    expect(recipePhoto).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg');
    const shareButton =  await screen.findByTestId('0-horizontal-share-btn');
    expect(shareButton).toHaveAttribute('src', 'shareIcon.svg');
    const favoriteButton =  await screen.findByTestId('favorite-btn');
    expect(favoriteButton).toHaveAttribute('src', 'whiteHeartIcon.svg');
    const recipeTitle =  await screen.findByTestId('recipe-title');
    expect(recipeTitle).toHaveTextContent('Burek');
    const recipeCategory =  await screen.findByTestId('recipe-category');
    expect(recipeCategory).toHaveTextContent('Side');
    const ulIngredients = await screen.findAllByRole('listitem');
    expect(ulIngredients.length).toBe(6);
    const recipeInstructions =  await screen.findByTestId('instructions');
    expect(recipeInstructions).toBeInTheDocument();
    const recipeVideo =  await screen.findByTestId('video');
    expect(recipeVideo).toBeInTheDocument();
    const recipeRecomend = await screen.findByTestId('0-recomendation-card');
    expect(recipeRecomend).toBeInTheDocument();
    const startRecipe = await screen.findByTestId('start-recipe-btn');
    expect(startRecipe).toHaveTextContent('Start Recipe');
    userEvent.click(startRecipe);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/foods/53060/in-progress');
  });
  test('2 - Testa se as informações da receita de bebida são exebidas corretamente', async () => {
    const { history } = renderWithRouter(<useContext><App /></useContext>);
    history.push('/drinks/17222');

    const recipePhoto =  await screen.findByTestId('recipe-photo');
    expect(recipePhoto).toHaveAttribute('src', 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg');
    const shareButton =  await screen.findByTestId('0-horizontal-share-btn');
    expect(shareButton).toHaveAttribute('src', 'shareIcon.svg');
    const favoriteButton =  await screen.findByTestId('favorite-btn');
    expect(favoriteButton).toHaveAttribute('src', 'whiteHeartIcon.svg');
    const recipeTitle =  await screen.findByTestId('recipe-title');
    expect(recipeTitle).toHaveTextContent('A1');
    const recipeCategory =  await screen.findByText('Cocktail');
    expect(recipeCategory).toBeInTheDocument();
    const recipeAlcoholic =  await screen.findByText('Alcoholic');
    expect(recipeAlcoholic).toBeInTheDocument();
    const ulIngredients = await screen.findAllByRole('listitem');
    expect(ulIngredients.length).toBe(4);
    const recipeInstructions =  await screen.findByTestId('instructions');
    expect(recipeInstructions).toBeInTheDocument();
    const recipeRecomend = await screen.findByTestId('0-recomendation-card');
    expect(recipeRecomend).toBeInTheDocument();
    const startRecipe = await screen.findByTestId('start-recipe-btn');
    expect(startRecipe).toHaveTextContent('Start Recipe');
    userEvent.click(startRecipe);
  });
  test('3 - Verifica o funcionamento do botão Favoritos e se a receita é armazenada no localStorage corretamente', async () => {
    const { history } = renderWithRouter(<useContext><App /></useContext>);
    history.push('/foods/53060');
    
    const favoriteButton = await screen.findByTestId('favorite-btn');
    expect(favoriteButton).toHaveAttribute('src', 'whiteHeartIcon.svg');
    await waitFor(() => {
      userEvent.click(favoriteButton);
      expect(favoriteButton).toHaveAttribute('src', 'blackHeartIcon.svg');
    });
    history.push('/foods');
    await waitFor(() => {
      localStorage.setItem('isFavorite', JSON.stringify([{id: '53060'}]));
      expect(localStorage.getItem('favoriteRecipes')).not.toBeNull();
    });
  });
  test('4 - Verifica se o botão de Favoritos já está marcado quando a receita favoritada for renderizada', async () => {
    const { history } = renderWithRouter(<useContext><App /></useContext>);
    localStorage.setItem('favoriteRecipes', JSON.stringify([{id: '53060'}]))
    history.push('/favorite-recipes');
    await waitFor(() => {
      const favoriteButton = screen.getByTestId('0-horizontal-favorite-btn');
      expect(favoriteButton).toHaveAttribute('src', 'blackHeartIcon.svg');
      userEvent.click(favoriteButton);
      expect(favoriteButton).toHaveAttribute('src', 'whiteHeartIcon.svg');
    });  
  });
});
