// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setChosenRecipe } from "../../redux/slices/chosenRecipeSlice";

// import "./RecipeResultsPage.css";

// const RecipePreview = ({ recipe, children }) => (
//   <div className="recipes">
//     {children}
//     {recipe.name.toUpperCase()}
//   </div>
// );

// export default function RecipeResultsPage() {
//   const dispatch = useDispatch();
//   const chosenRecipe = useSelector((state) => state.chosenRecipe.value);
//   const chosenRegion = useSelector((state) => state.chosenRegion.value);

//   function handleClick(recipeName) {
//     dispatch(setChosenRecipe(recipeName));
//     console.log("The chosen recipe after the click is: " + chosenRecipe); //for my benefit - to be deleted
//   }

//   const [recipeRegionalResults] = useState([
//     {
//       name: "Chicken and Cheese Plait",
//       logo: "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/chicken-cheese-plait-a2070cb114e5c3e0115de0aa.jpg",
//     },
//     {
//       name: "Spiced Potato Waffles",
//       logo: "https://images.squarespace-cdn.com/content/v1/5e985b821377c962da43d181/3127ca43-ea72-420d-9a18-3bbbdaa4055a/potato+waffles+vegan+by+kam+sokhi+mind+body+%26+eating+coach?format=2500w",
//     },
//     {
//       name: "Fully Loaded Eggplant",
//       logo: "https://cdn-fastly.foodtalkdaily.com/media/2021/02/28/6531025/loaded-eggplant.jpg?size=720x845&nocrop=1 ",
//     },
//     {
//       name: "Gazpacho",
//       logo: "https://www.allrecipes.com/thmb/-nIbbremnsXf5wMgz6D6nqqKt6Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/222331-Chef-Johns-Gazpacho-ddmfs-4x3-2781-67624a59fa4c4375b9149d06f6c32348.jpg",
//     },
//     {
//       name: "Gratin with Sardines",
//       logo: "https://www.stylist.co.uk/images/app/uploads/2020/09/09175610/gratin-with-sardines-recipe.jpg?auto=format%2Ccompress&fit=max&fm=webp&monochrome=29000000&q=75&txt=FROM%20BATCH%20COOKING%3A%20PREP%20AND%20COOK%20YOUR%20WEEKNIGHT%20DINNERS%20IN%20LESS%20THAN%202%20HOURS%20BY%20KEDA%20BLACK%20%28%C2%A315%2C%20HARDIE%20GRANT%29%2C%20SUPPLIED&txt-align=bottom%2Cright&txt-color=%23FEFEFE&txt-font=futura-pt%2Csans-serif&txt-shad=10&txt-size=10px&w=1400",
//     },
//     {
//       name: "Shakshuka",
//       logo: "https://images.immediate.co.uk/production/volatile/sites/2/2021/10/shakshuka-d671cf5.jpg?quality=90&webp=true&resize=300,272",
//     },
//     {
//       name: "Spinach and Turnip Curry",
//       logo: "https://media.riverford.co.uk/images/photo-800x800-d7b0f8a71d1f22ad0a4f09f7ff50ce9a.jpg",
//     },
//     {
//       name: "Siracha Linguine",
//       logo: "https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/shrimp-linguine-with-tomatoes--8d0a2d.jpg",
//     },
//   ]);

//   return (
//     <div className="RecipeResultsPage">
//       <h2>NAV BAR HERE</h2>
//       <div className="banner">
//         HERE ARE EIGHT RECIPES FROM {chosenRegion}.
//         <br /> CLICK ON A RECIPE TO SEE FULL DETAILS
//       </div>

//       <div className="recipeResultsContainer">
//         {recipeRegionalResults.map((recipe, index) => (
//           <RecipePreview key={index} recipe={recipe}>
//             <img
//               src={recipe.logo}
//               alt="food"
//               onClick={() => handleClick(recipe.name)}
//             />
//           </RecipePreview>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChosenRecipe } from "../../redux/slices/chosenRecipeSlice";
import axios from "axios";

import "./RecipeResultsPage.css";

export default function RecipeResultsPage() {
  const dispatch = useDispatch();
  const chosenRecipe = useSelector((state) => state.chosenRecipe.value);
  const chosenRegion = useSelector((state) => state.chosenRegion.value);
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

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

  function handleClick(recipeName) {
    dispatch(setChosenRecipe(recipeName));
    console.log("The chosen recipe after the click is: " + chosenRecipe);
  }

  return (
    <div className="RecipeResultsPage">
      <h2>NAV BAR HERE</h2>
      <div className="banner">
        HERE ARE EIGHT RECIPES FROM {chosenRegion}.
        <br /> CLICK ON A RECIPE TO SEE FULL DETAILS - TEST
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
        {recipes.map((recipe, index) => (
          <div key={index} className="recipes">
            <img
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
              onClick={() => handleClick(recipe.recipe.label)}
            />
            {recipe.recipe.label.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}
