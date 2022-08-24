import React from 'react';

function RecipeInProgress() {
  return (
    <div>

      {/*       {
        getInfos.map((element) => (
          <div key={ element.idMeal }>
            <img
              alt={ element.strMeal }
              data-testid="recipe-photo"
              src={ element.strMealThumb }
            />
            <h2
              key={ element.idMeal }
              data-testid="recipe-title"
            >
              {element.strMeal}
            </h2>
            <button
              type="button"
              data-testid="share-btn"
            >
              Compartilhar

            </button>
            <button
              type="button"
              data-testid="favorite-btn"
            >
              Favoritar
            </button>
            <p data-testid="recipe-category">
              {element.strCategory}
            </p>
            <p data-testid="recipe-category">
              {element.strInstructions}
            </p>

            <button
              type="button"
              data-testid="finish-recipe-btn"
            >
              Finalizar Receitas
            </button>
          </div>

        ))
      }
      <p>estou aqui</p>

      {Object.keys(getStepRecipe.map((element) => element[0]))}

    </div>
  );
}

export default RecipeInProgress;
