import React, { useState } from 'react';

const RecipeCard = () => {
  const [hiddenInstructions, setHiddenInstructions] = useState(true);

  const toggleInstructions = () => {
    setHiddenInstructions(prevHidden => !prevHidden);
  };

  return (
    <div className="recipe-card">
      <h2>Peach Cobbler</h2>
      <button className="edit-button" onClick={toggleInstructions}>
        {hiddenInstructions ? 'Show Instructions' : 'Hide Instructions'}
      </button>
      {hiddenInstructions ? null : (
        <div className="instructions">
          <h3>Ingredients:</h3>
          <ul className="ingredients-list">
            <li>5 peaches, peeled, cored and sliced (about 4 cups)</li>
            <li>3/4 cup granulated sugar</li>
            <li>1/4 teaspoon salt</li>
            <li>6 Tablespoons butter</li>
            <li>1 cup all-purpose flour</li>
            <li>1 cup granulated sugar</li>
            <li>2 teaspoons baking powder</li>
            <li>3/4 cup milk</li>
            <li>Ground cinnamon</li>
          </ul>

          <h3>Instructions:</h3>
          <ol className="instructions">
            <li>Add the sliced peaches, sugar, and salt to a saucepan and stir to combine.</li>
            <li>Cook on medium heat for just a few minutes, until the sugar is dissolved and helps to bring out juices from the peaches. Remove from heat and set aside.</li>
            <li>Preheat oven to 350 degrees F. Slice butter into pieces and add to a 9x13 inch baking dish. Place the pan in the oven while it preheats, to allow the butter to melt. Once melted, remove the pan from the oven.</li>
            <li>In a large bowl mix together the flour, sugar, baking powder, and salt. Stir in the milk, just until combined. Pour the mixture into the pan, over the melted butter and smooth it into an even layer.</li>
            <li>Spoon the peaches and juice (or canned peaches, if using) over the batter. Sprinkle cinnamon generously over the top.</li>
            <li>Bake at 350 degrees for about 38-40 minutes. Serve warm, with a scoop of ice cream, if desired.</li>
          </ol>

          <h3>Notes:</h3>
          <p>To substitute canned peaches, use 1 quart jar, undrained.</p>

          <h3>Nutrition:</h3>
          <ul className="nutrition-list">
            <li>Calories: 315kcal</li>
            <li>Carbohydrates: 59g</li>
            <li>Protein: 3g</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
