import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App"
import { useContext } from 'react'
import renderWithRouter from "../tests/helpers/renderWithRouter";

describe('Testando o componente Footer', () => {
  test('Verifica se o menu e os elementos estão sendo renderizados', async () => {
    const { history } = renderWithRouter(<useContext><App /></useContext>);
    history.push('/foods');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/foods');

    const footerMenu = await screen.findByTestId('footer');
    expect(footerMenu).toBeInTheDocument();

    const foodIcon = screen.getByTestId('food-bottom-btn');
    expect(foodIcon).toBeInTheDocument();
    userEvent.click(foodIcon);

    const drinksIcon = screen.getByTestId('drinks-bottom-btn');
    expect(drinksIcon).toBeInTheDocument();
    userEvent.click(drinksIcon);
  });  
});