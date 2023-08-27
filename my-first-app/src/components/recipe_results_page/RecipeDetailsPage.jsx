
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import RecipeResultsPage from './RecipeResultsPage';
// import './card.css';

// const RecipeDetailsPage = () => {
//   const { recipeUriSliced } = useParams();
//   const [recipeDetails, setRecipeDetails] = useState(null);

//   useEffect(() => {
//     if (recipeUriSliced) {
//       console.log('Received sliced recipe URI:', recipeUriSliced);
//       // Construct the recipe URI without "recipe_" prefix
  
//       // console.log('recipeUriSliced:', recipeUriSliced);
//       // console.log('recipeUri:', recipeUri);

//       // Construct the API request URL
//       const apiUrl = `https://api.edamam.com/api/recipes/v2/${recipeUriSliced}?app_id=85ba0210&app_key=cae578f5373f208164226644fd95689b&type=public`;
      
//       // Fetch the recipe details
//       fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//           if (data.recipe) {
//             setRecipeDetails(data.recipe);
//           } else {
//             console.error('Recipe details not found in API response:', data);
//           }
//         })
//         .catch(error => {
//           console.error('Error fetching recipe details:', error);
//         });
//     }
//   }, [recipeUriSliced]);

//   // Rest of your component code


//   return (
//     <div className="tabbed-recipe-card"> {/* Apply the recipe-details styling */}
//       {recipeDetails ? (
//         <div>
//           <h2 className="tab-title">{recipeDetails.label}</h2>
//           <img className="recipe-img" src={recipeDetails.image} alt={recipeDetails.label} />

//           <div className="tab-content">
//             <h3>Ingredients:</h3>
//             <ul className="ingredients-list">
//               {recipeDetails.ingredientLines.map((ingredient, i) => (
//                 <li key={i}>{ingredient}</li>
//               ))}
//             </ul>

//             <p>
//               <strong>Source:</strong> {recipeDetails.source}
//             </p>
//             <p>
//               <strong>URL:</strong> <a href={recipeDetails.url}>{recipeDetails.url}</a>
//             </p>
//           </div>
//         </div>
//       ) : (
//         <p>Loading recipe details...</p>
//       )}
//     </div>
//   );
// };

// export default RecipeDetailsPage;

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faGlobe, faClock } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import RecipeResultsPage from './RecipeResultsPage';
import './card.css';

const RecipeDetailsPage = () => {
  const { recipeUriSliced } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState('');

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

  const toggleNotes = () => {
    setShowNotes(prevShowNotes => !prevShowNotes);
  };

  const handleNotesChange = event => {
    setNotes(event.target.value);
  };

  return (
    <div className="recipe-details"> {/* Apply the recipe-details styling */}
      {recipeDetails ? (
        <div>
          <h2 className="tab-title">{recipeDetails.label}</h2>
          <img className="recipe-img" src={recipeDetails.image} alt={recipeDetails.label} />

          <div className="tab-content">
            <div className="tab-header">
              <div className="tab-item">
                <FontAwesomeIcon icon={faUtensils} /> Yield: {recipeDetails.yield}
              </div>
              <div className="tab-item">
                <FontAwesomeIcon icon={faGlobe} /> Cuisine: {recipeDetails.cuisineType}
              </div>
              <div className="tab-item">
                <FontAwesomeIcon icon={faClock} /> Prep Time: {recipeDetails.prepTime}
              </div>
            </div>

            <div className="tab-body">
              <div className="tab-item">
                <h3>Ingredients:</h3>
                <ul className="ingredients-list">
                  {recipeDetails.ingredientLines?.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="tab-item">
                <h3>Click here for more details:</h3>
                <p>
                  Source: <a href={recipeDetails.url}>{recipeDetails.source}</a>
                </p>
              </div>
            </div>
          </div>

          {showNotes && (
            <div className="tab-notes active">
              <textarea
                className="notes-input"
                value={notes}
                onChange={handleNotesChange}
                placeholder="Add your notes here..."
              />
            </div>
          )}

          <button className="add-notes-button" onClick={toggleNotes}>
            {showNotes ? 'Hide Notes' : 'Add Notes'}
          </button>
        </div>
      ) : (
        <p>Loading recipe details...</p>
      )}
    </div>
  );
};

export default RecipeDetailsPage;