import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const RecipeCard = ({ chosenRecipe }) => {

  if (!chosenRecipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="tabbed-recipe-card">
      <h2>{chosenRecipe.label}</h2>
      <img src={chosenRecipe.image} alt={chosenRecipe.label} />

      <div className="tab-content">
        <h3>Ingredients:</h3>
        <ul className="ingredients-list">
          {chosenRecipe.ingredientLines.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>

        <p>
          <strong>Source:</strong> {chosenRecipe.source}
        </p>
        <p>
          <strong>URL:</strong> <a href={chosenRecipe.url}>{chosenRecipe.url}</a>
        </p>
      </div>

      <Link to="/recipes">Back to Recipe Results</Link>
    </div>
  );
};

export default RecipeCard;
