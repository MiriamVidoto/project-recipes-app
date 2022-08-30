import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRouter from "../tests/helpers/renderWithRouter";
import App from "../App";
import { useContext } from 'react';
import meals from '../../cypress/mocks/meals'

describe('Testando o componente RecipeCards Foods', () => {
  delete global.window.location;
  global.window = Object.create(window);
  global.window.location = {
    reload: jest.fn(),
    pathname: '/foods',
  };
  
  /* test('Testa se a página Foods carrega os botões que filtram por categoria', async () => {
    const { history } = renderWithRouter(<useContext><App /></useContext>);
    history.push('/foods');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/foods');

    const allCategoryButton = await screen.findByTestId('All-category-filter');
    expect(allCategoryButton).toBeInTheDocument();
    const beefCategoryButton = await screen.findByTestId('Beef-category-filter');
    expect(beefCategoryButton).toBeInTheDocument();
    const breakfastCategoryButton = await screen.findByTestId("Breakfast-category-filter");
    expect(breakfastCategoryButton).toBeInTheDocument();
    const chickenCategoryButton = await screen.findByTestId("Chicken-category-filter");
    expect(chickenCategoryButton).toBeInTheDocument();
    const dessertCategoryButton = await screen.findByTestId("Dessert-category-filter");
    expect(dessertCategoryButton).toBeInTheDocument();
    const goatCategoryButton = await screen.findByTestId("Goat-category-filter");
    expect(goatCategoryButton).toBeInTheDocument();
  }); */
  test('Verifica o funcionamento dos filtros de categoria', async () => {
    const { history } = renderWithRouter(<useContext><App /></useContext>);
    history.push('/foods');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/foods');

    const beefCategoryButton = await screen.findByTestId('All-category-filter'); // chama o beef
    expect(beefCategoryButton).toBeInTheDocument();
    userEvent.click(beefCategoryButton);

    const recipePhoto =  await screen.findByTestId('0-card-img');
    expect(recipePhoto).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg');
    userEvent.click(beefCategoryButton);
    const returnrecipePhoto =  await screen.findByTestId('0-card-img');
    expect(returnrecipePhoto).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg');
  });
});

describe('Testando o componente RecipeCards Drinks', () => {
  delete global.window.location;
  global.window = Object.create(window);
  global.window.location = {
    reload: jest.fn(),
    pathname: '/drinks',
  };
  
  /* test('Testa se a página Drinks carrega os botões que filtram por categoria', async () => {
    const { history } = renderWithRouter(<useContext><App /></useContext>);
    history.push('/drinks');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/drinks');

    const allCategoryButton = await screen.findByTestId('All-category-filter');
    expect(allCategoryButton).toBeInTheDocument();
    const OrdinaryCategoryButton = await screen.findByTestId('Ordinary Drink-category-filter');
    expect(OrdinaryCategoryButton).toBeInTheDocument();
    const cocktailCategoryButton = await screen.findByTestId("Cocktail-category-filter");
    expect(cocktailCategoryButton).toBeInTheDocument();
    const shakeCategoryButton = await screen.findByTestId("Shake-category-filter");
    expect(shakeCategoryButton).toBeInTheDocument();
    const otherCategoryButton = await screen.findByTestId("Other/Unknown-category-filter");
    expect(otherCategoryButton).toBeInTheDocument();
    const cocoaCategoryButton = await screen.findByTestId("Cocoa-category-filter");
    expect(cocoaCategoryButton).toBeInTheDocument();
  }); */
  
});
