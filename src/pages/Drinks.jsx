import React from 'react';
import Header from '../components/Header';
import ButtonsCategory from '../components/ButtonsCategory';
import RecipeCards from '../components/RecipeCards';

function Drinks() {
  return (
    <div>
      <Header headerName="Drinks" />
      <ButtonsCategory />
      <RecipeCards />
    </div>
  );
}

export default Drinks;
