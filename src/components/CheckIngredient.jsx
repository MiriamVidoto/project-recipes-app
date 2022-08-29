import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CheckIngredient({ type, index, recipe, ingrediente }) {
  const [ingredientsChecked, setIngredientsChecked] = useState(false);
  const testType = type === 'meal' ? 'meals' : 'cocktails';
  const { id } = useParams();
  const amount = recipe.length !== 0 ? Object.keys(recipe[0])
    .filter((key) => key.includes('strMeasure'))
    : [];
  const ingredientSome = recipe[0][amount[index]] !== null
    ? `${recipe[0][ingrediente]} - ${recipe[0][amount[index]]}` : recipe[0][ingrediente];
  const local = JSON.parse(localStorage.getItem('inProgressRecipes'));

  const verifyCheck = () => {
    if (local[testType][id]) {
      const condition = local[testType][id].includes(ingredientSome);
      setIngredientsChecked(condition);
    }
  };

  useEffect(() => {
    verifyCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const verifyStorage = () => {
    if (local[testType][id] !== undefined) {
      const newRecipe = { ...local,
        [testType]: { ...local[testType],
          [id]: [...local[testType[id]]] } };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newRecipe));
    } else {
      const newRecipe = { ...local,
        [testType]: { ...local[testType],
          [id]: [] } };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newRecipe));
    }
  };

  const toggleCheckbox = (e) => {
    setIngredientsChecked(!ingredientsChecked);
    verifyStorage();
    if (!ingredientsChecked) {
      local[testType][id].push(e.target.value);
      localStorage.setItem('inProgressRecipes', JSON.stringify(local));
    } else {
      const i = (local[testType][id]).indexOf(e.target.value);
      local[testType][id].splice(i);
      localStorage.setItem('inProgressRecipes', JSON.stringify(local));
    }
  };

  return (
    <li
      data-testid={ `${index}-ingredient-step` }
      id="li-ingredients"
    >
      <label
        htmlFor={ ingrediente }
        className="input"

      >
        <input
          type="checkbox"
          onChange={ (e) => toggleCheckbox(e) }
          id={ ingrediente }
          checked={ ingredientsChecked }
          value={
            `${recipe[0][ingrediente]} - ${recipe[0][amount[index]]}`
          }

        />
        {ingredientSome}
      </label>

    </li>
  );
}

CheckIngredient.propTypes = {
  index: PropTypes.number.isRequired,
  ingrediente: PropTypes.string.isRequired,
  recipe: PropTypes.shape({
    length: PropTypes.number,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default CheckIngredient;
