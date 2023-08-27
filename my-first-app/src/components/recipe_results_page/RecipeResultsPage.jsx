import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RecipeCard from './recipe-card';
import RecipeDetailsPage from './RecipeDetailsPage';

import './RecipeResultsPage.css';

export default function RecipeResultsPage() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const [chosenRecipe, setChosenRecipe] = useState(null);

  const getRecipes = async () => {
    const YOUR_APP_ID = '85ba0210';
    const YOUR_APP_KEY = 'cae578f5373f208164226644fd95689b';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

    try {
      const response = await axios.get(url);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };


  const handleClick = (recipe) => {
    const recipeUri = recipe.recipe.uri;
    const recipeUriSliced = recipeUri.split('_')[1];
    console.log('Clicked recipe:', recipe);
    console.log('Clicked recipe URI:', recipeUri);
    console.log('Clicked sliced URI:', recipeUriSliced);
    
    navigate(`/recipe/${recipeUriSliced}`);
  };
  

  

  return (
    <div className="RecipeResultsPage">
      <div className="banner">
        HERE ARE EIGHT RECIPES.
        <br /> CLICK ON A RECIPE TO SEE FULL DETAILS
      </div>

      <div className="app__content">
        <h1 className="header">Discover & Cook Worldwide Recipe</h1>
        <form className="app__searchForm" onSubmit={(e) => { e.preventDefault(); getRecipes(); }}>
          <input
            type="text"
            placeholder="Enter ingredient"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="recipeResultsContainer">
        {recipes.map((recipe) => (
          <div key={recipe.recipe.uri} className="recipes">
            <div className="recipe-link">
              <img
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
                onClick={() => handleClick(recipe)}
              />
            </div>
            {recipe.recipe.label.toUpperCase()}
          </div>
        ))}
      </div>
      <RecipeCard chosenRecipe={chosenRecipe} />


    
    </div>
  );
}
