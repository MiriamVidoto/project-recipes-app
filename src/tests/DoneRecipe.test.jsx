// import React from "react";

// describe('Testando o componente Done Recipes Foods', () => {
//     delete global.window.location;
//     global.window = Object.create(window);
//     global.window.location = {
//       reload: jest.fn(),
//       pathname: '/done-recipes',
//     };
    
   
//     test('Verifica o funcionamento dos filtros de categoria', async () => {
//       const { history } = renderWithRouter(<useContext><App /></useContext>);
//       history.push('/done-recipes');
//       const { location: { pathname } } = history;
//       expect(pathname).toBe('/done-recipes');
  
//     //   const beefCategoryButton = await screen.findByTestId('All-category-filter'); // chama o beef
//     //   expect(beefCategoryButton).toBeInTheDocument();
//     //   userEvent.click(beefCategoryButton);


  
     
//     });
//   });