import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import myContext from '../context/Context';
import './styles/checkIngredient.css';

function CheckIngredient({
  type,
  index,
  recipe,
  ingrediente,
}) {
  const [ingredientsChecked, setIngredientsChecked] = useState(false);
  const { recipesCheck, setRecipesCheck } = useContext(myContext);
  const [some, setSome] = useState([]);

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

  const verifyIngredientesCheck = () => {
    // const storage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    setSome(ingredientSome);
    console.log(some);
  };

  useEffect(() => {
    verifyCheck();
    verifyIngredientesCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleCheckbox = () => {
    setIngredientsChecked(!ingredientsChecked);
    setRecipesCheck(!recipesCheck);
    const storage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!storage[testType][id]) {
      const obj = { ...storage[testType], [id]: [ingredientSome] };
      storage[testType] = obj;
    } else if (storage[testType][id].includes(ingredientSome)) {
      const filter = storage[testType][id].filter((ele) => ele !== ingredientSome);
      storage[testType][id] = filter;
    } else {
      storage[testType][id].push(ingredientSome);
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(storage));
  };

  return (
    <li
      data-testid={ `${index}-ingredient-step` }
      id="li-ingredients"
      className="li-checkbox"
    >
      <label
        htmlFor={ ingrediente }
        className="label-checkbox"
      >
        <input
          type="checkbox"
          onChange={ toggleCheckbox }
          id={ ingrediente }
          checked={ ingredientsChecked }
        />
        {' '}
        {ingredientSome}
      </label>

    </li>
  );
}

CheckIngredient.propTypes = {
  index: PropTypes.number,
  ingrediente: PropTypes.string,
  recipe: PropTypes.array,
  type: PropTypes.string,
}.isRequired;

export default CheckIngredient;
