import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeCard = ({ recipes }) => {
  const { label } = useParams(); // Get the recipe label from the URL parameter
  const recipe = recipes.find((r) => r.label === label); // Find the corresponding recipe

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="tabbed-recipe-card">
      {/* Display the recipe details */}
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />

      <div className="tab-content">
        {/* Render recipe details, e.g., ingredients, instructions */}
        <h3>Ingredients:</h3>
        <ul className="ingredients-list">
          {recipe.ingredientLines.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>

        {/* Render other recipe details */}
        {/* ... */}
      </div>
    </div>
  );
};
     
export default RecipeCard;