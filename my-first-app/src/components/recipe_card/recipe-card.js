import React, { useState } from 'react';

const RecipeCard = () => {
  const [hiddenInstructions, setHiddenInstructions] = useState(true);

  const toggleInstructions = () => {
    setHiddenInstructions(prevHidden => !prevHidden);
  };

  return (
    <div className="recipe-card">
      <h2>Recipe Title</h2>
      <button className="edit-button" onClick={toggleInstructions}>
        {hiddenInstructions ? 'Show Instructions' : 'Hide Instructions'}
      </button>
      {hiddenInstructions ? null : (
        <div className="instructions">
          {/* Insert your instructions content here */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
