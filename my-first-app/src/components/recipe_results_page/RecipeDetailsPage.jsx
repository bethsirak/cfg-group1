// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const RecipeDetailsPage = ({ appId, appKey }) => {
//   const { recipeUri } = useParams();
//   const [recipeDetails, setRecipeDetails] = useState(null);

//   useEffect(() => {
//     // Construct the recipe URI without "recipe_" prefix
//     const recipeUriSliced = recipeUri.split('_')[1];
//     console.log(recipeUriSliced)

//     // Construct the API request URL]
//     const YOUR_APP_ID = '85ba0210';
//     const YOUR_APP_KEY = 'cae578f5373f208164226644fd95689b';
//     const apiUrl = `https://api.edamam.com/api/recipes/v2/${recipeUriSliced}?app_id=85ba0210&app_key=cae578f5373f208164226644fd95689b&type=public`;

//     // Fetch the recipe details
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => setRecipeDetails(data))
//       .catch(error => console.error('Error fetching recipe details:', error));
//   }, [recipeUri, appId, appKey]);

//   return (
//     <div className="recipe-details">
//       {recipeDetails ? (
//         <div>
//           <h2>{recipeDetails.label}</h2>
//           <p>Ingredients: {recipeDetails.ingredientLines ? recipeDetails.ingredientLines.join(', ') : 'N/A'}</p>
//           <p>Total Time: {recipeDetails.totalTime} minutes</p>
//           {/* Display other recipe details */}
//         </div>
//       ) : (
//         <p>Loading recipe details...</p>
//       )}
//     </div>
//   );
// };

// export default RecipeDetailsPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeResultsPage from './RecipeResultsPage';

const RecipeDetailsPage = () => {
  const { recipeUriSliced } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    if (recipeUriSliced) {
      console.log('Received sliced recipe URI:', recipeUriSliced);
      // Construct the recipe URI without "recipe_" prefix
  
      // console.log('recipeUriSliced:', recipeUriSliced);
      // console.log('recipeUri:', recipeUri);

      // Construct the API request URL
      const apiUrl = `https://api.edamam.com/api/recipes/v2/${recipeUriSliced}?app_id=85ba0210&app_key=cae578f5373f208164226644fd95689b&type=public`;
      
      // Fetch the recipe details
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (data.recipe) {
            setRecipeDetails(data.recipe);
          } else {
            console.error('Recipe details not found in API response:', data);
          }
        })
        .catch(error => {
          console.error('Error fetching recipe details:', error);
        });
    }
  }, [recipeUriSliced]);

  // Rest of your component code


  return (
    <div className="recipe-details">
      {recipeDetails ? (
        <div>
          <h2>{recipeDetails.label}</h2>
          <p>Ingredients: {recipeDetails.ingredientLines ? recipeDetails.ingredientLines.join(', ') : 'N/A'}</p>
          <p>Total Time: {recipeDetails.totalTime} minutes</p>
          {/* Display other recipe details */}
        </div>
      ) : (
        <p>Loading recipe details...</p>
      )}
    </div>
  );
};

export default RecipeDetailsPage;
