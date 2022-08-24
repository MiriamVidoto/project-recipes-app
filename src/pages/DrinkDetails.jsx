// import PropTypes from 'prop-types';
// import React, { useState, useContext, useEffect } from 'react';
// import CardRecomend from '../components/CardRecomend';
// import myContext from '../context/Context';
// import { getDetailsRecipe } from '../services/recipesAPI';

// function DrinkDetails({ match }) {
//   const { setType } = useContext(myContext);
//   const [recipe, setRecipe] = useState();
//   const { id } = match.params;

//   const getRecipeAPI = async () => {
//     const result = await getDetailsRecipe('drinks', id);
//     setRecipe(result);
//   };

//   useEffect(() => {
//     setType('drinks');
//     getRecipeAPI();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const ingredients = recipe ? [
//     recipe[0].strIngredient1,
//     recipe[0].strIngredient2,
//     recipe[0].strIngredient3,
//     recipe[0].strIngredient4,
//     recipe[0].strIngredient5,
//     recipe[0].strIngredient6,
//     recipe[0].strIngredient7,
//     recipe[0].strIngredient8,
//     recipe[0].strIngredient9,
//     recipe[0].strIngredient10,
//     recipe[0].strIngredient11,
//     recipe[0].strIngredient12,
//     recipe[0].strIngredient13,
//     recipe[0].strIngredient14,
//     recipe[0].strIngredient15,
//   ] : [];

//   return (
//     <div>
//       {
//         recipe
//         && (
//           <>
//             <img
//               src={ recipe[0].strDrinkThumb }
//               alt="Drink"
//               data-testid="recipe-photo"
//             />
//             <h2 data-testid="recipe-title">{recipe[0].strDrink}</h2>
//             <p ata-testid="recipe-category">{recipe[0].strCategory}</p>
//             <p>{recipe[0].strAlcoholic}</p>
//             <h3>Ingredients:</h3>
//             <ul>
//               {ingredients.length > 0 && (
//                 ingredients
//                   .filter((e) => e !== null)
//                   .map((ingredient, index) => (
//                     <li
//                       key={ index }
//                       data-testid={ `${index}-ingredient-name-and-measure` }
//                     >
//                       {ingredient}
//                     </li>
//                   )))}
//             </ul>
//             <h3>Instuctions:</h3>
//             <p data-testid="instructions">{recipe[0].strInstructions}</p>
//             <section>
//               <CardRecomend />
//             </section>
//           </>
//         )
//       }
//     </div>
//   );
// }

// DrinkDetails.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       id: PropTypes.string,
//     }),
//     path: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default DrinkDetails;
