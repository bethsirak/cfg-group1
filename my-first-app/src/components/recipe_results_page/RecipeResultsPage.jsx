import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChosenRecipe } from "../../redux/slices/chosenRecipeSlice";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

import "./RecipeResultsPage.css";


export default function RecipeResultsPage() {
  const dispatch = useDispatch();
  const chosenRecipe = useSelector((state) => state.chosenRecipe.value);
  const chosenRegion = useSelector((state) => state.chosenRegion.value);
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const getRecipes = async () => {
    const YOUR_APP_ID = "85ba0210";
    const YOUR_APP_KEY = "cae578f5373f208164226644fd95689b";
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

    try {
      const response = await axios.get(url);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  // function handleClick(recipeName) {
  //   dispatch(setChosenRecipe(recipeName));
  //   console.log("The chosen recipe after the click is: " + chosenRecipe);
  // }

  const handleClick = (recipe) => {
    dispatch(setChosenRecipe(recipe.label)); // You can set the recipe label as the chosen recipe
    console.log("The chosen recipe after the click is: " + recipe.label);
    navigate(`/recipe/${recipe.label}`);
  };

  return (
    <div className="RecipeResultsPage">
      <h2>NAV BAR HERE</h2>
      <div className="banner">
        HERE ARE EIGHT RECIPES FROM {chosenRegion}.
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
          <Link to={`/recipe/${recipe.recipe.label}`} className="recipe-link">
            <img
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
              onClick={() => handleClick(recipe.recipe)}
            />
          </Link>
          {recipe.recipe.label.toUpperCase()}   
        </div>
      ))}
      </div>
    </div>
  );
}