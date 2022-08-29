import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App"
import { useContext } from 'react'
import renderWithRouter from "../tests/helpers/renderWithRouter";

describe('Testando o componente Profile', () => {
  test('Verifica se o email é renderizado', async () => {
    const { history } = renderWithRouter(<useContext><App /></useContext>);
    history.push('/profile');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/profile');

    const profileEmail = await screen.findByTestId('profile-email');
    expect(profileEmail).toBeInTheDocument();    
  });
  test('Verifica o funcionamento do botão Done Recipes', async () => {
    const { history } = renderWithRouter(<useContext><App /></useContext>);
    history.push('/profile');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/profile');

    const doneRecipesButton = await screen.findByTestId('profile-done-btn');
    expect(doneRecipesButton).toBeInTheDocument();
    userEvent.click(doneRecipesButton);
  });
  test('Verifica o funcionamento do botão Favorite Recipes', async () => {
    const { history } = renderWithRouter(<useContext><App /></useContext>);
    history.push('/profile');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/profile');

    const FavoriteRecipesButton = await screen.findByTestId('profile-favorite-btn');
    expect(FavoriteRecipesButton).toBeInTheDocument();
    userEvent.click(FavoriteRecipesButton);
  });
  test('Verifica o funcionamento do botão Logout', async () => {
    const { history } = renderWithRouter(<useContext><App /></useContext>);
    history.push('/profile');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/profile');

    const logoutButton = await screen.findByTestId('profile-logout-btn');
    expect(logoutButton).toBeInTheDocument();
    userEvent.click(logoutButton);
  });
});