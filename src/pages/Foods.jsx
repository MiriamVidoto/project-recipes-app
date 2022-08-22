import React from 'react';
import Header from '../components/Header';
import ButtonsCategory from '../components/ButtonsCategory';
import RecipeCards from '../components/RecipeCards';

function Foods() {
  return (
    <div>
      <Header title="Foods" />
      <ButtonsCategory />
      <RecipeCards />
    </div>
  );
}

export default Foods;
