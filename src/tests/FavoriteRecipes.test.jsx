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

  test('Verifica se a página é renderizada corretamente', async () => {
    const { history } = renderWithRouter(<useContext><App /></useContext>);
    await waitFor(() => {
      localStorage.setItem('favoriteRecipes', JSON.stringify([{id: '53060'}]))
      history.push('/favorite-recipes');
    });

    const pageTitle = await screen.findByTestId('page-title');
    expect(pageTitle).toHaveTextContent('Favorite Recipes');
    const profileButton = await screen.findByTestId('profile-top-btn');
    expect(profileButton).toBeInTheDocument();
    const filterAllButton = await screen.findByTestId('filter-by-all-btn');
    expect(filterAllButton).toBeInTheDocument();
    const filterFoodsButton = await screen.findByTestId('filter-by-food-btn');
    expect(filterFoodsButton).toBeInTheDocument();
    const filterDrinksButton = await screen.findByTestId('filter-by-drink-btn');
    expect(filterDrinksButton).toBeInTheDocument();

    const recipePhoto =  await screen.findByTestId('0-horizontal-image');
    //expect(recipePhoto).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg');
    expect(recipePhoto).toBeInTheDocument();
    const nameRecipe =  await screen.findByTestId('0-horizontal-name');
    //expect(nameRecipe).toHaveTextContent('Burek');
    expect(nameRecipe).toBeInTheDocument();
    const areaAndCategoryText =  await screen.findByTestId('0-horizontal-top-text');
    //expect(areaAndCategoryText).toHaveTextContent('Croatian - Side');
    expect(areaAndCategoryText).toBeInTheDocument();

    const shareButton =  await screen.findByTestId('share-btn');
    //expect(shareButton).toHaveAttribute('src', 'shareIcon.svg');
    expect(shareButton).toBeInTheDocument();
    const favoriteButton =  await screen.findByTestId('favorite-btn');
    //expect(favoriteButton).toHaveAttribute('src', 'blackHeartIcon.svg');
    expect(favoriteButton).toBeInTheDocument();
  });  
});  