import React, { useState } from 'react';
import './card.css'; // Import the CSS file
 // Add your custom CSS for styling

const RecipeCardTemplate = () => {
  const [hiddenNotes, setHiddenNotes] = useState(true);

  const toggleNotes = () => {
    setHiddenNotes(prevHidden => !prevHidden);
  };

  return (
    <div className="tabbed-recipe-card">
      <div className="tab-title">Recipe Title</div>

      <div className="tab-content">
        <div className="tab-header">
          <div className="tab-item">Yield: 4 servings</div>
          <div className="tab-item">Cuisine: Italian</div>
          {/* Add more tab items for other details */}
        </div>

        <div className="tab-body">
          <div className="tab-item">
            <h3>Ingredients:</h3>
            <ul className="ingredients-list">
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              {/* Add more ingredients */}
            </ul>
          </div>
          <div className="tab-item">
            <h3>Instructions:</h3>
            <ol className="instructions">
              <li>Step 1</li>
              <li>Step 2</li>
              {/* Add more steps */}
            </ol>
          </div>
          {/* Add more tab items for other sections */}
        </div>
      </div>

      <button className="add-notes-button" onClick={toggleNotes}>
        {hiddenNotes ? 'Add Notes' : 'Hide Notes'}
      </button>

      {!hiddenNotes && (
        <div className="tab-notes">
          {/* Add your notes content here */}
          These are some notes about the recipe.
        </div>
      )}
    </div>
  );
};

export default RecipeCardTemplate;
