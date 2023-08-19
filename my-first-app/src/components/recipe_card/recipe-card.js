import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faGlobe, faClock } from '@fortawesome/free-solid-svg-icons';
import './card.css'; // Add your custom CSS for styling

const RecipeCard = () => {
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState('');

  const toggleNotes = () => {
    setShowNotes(prevShowNotes => !prevShowNotes);
  };

  const handleNotesChange = event => {
    setNotes(event.target.value);
  };

  return (
    <div className="tabbed-recipe-card">
      <div className="tab-title">Peach Cobbler</div>
      <img
        src="../images/peachcobbler.jpeg"
        alt="Peach Cobbler"
        className="recipe-img"
      />

      <div className="tab-content">
        <div className="tab-header">
          <div className="tab-item">
            <FontAwesomeIcon icon={faUtensils} /> Yield: 4 servings
          </div>
          <div className="tab-item">
            <FontAwesomeIcon icon={faGlobe} /> Cuisine: Dessert
          </div>
          <div className="tab-item">
            <FontAwesomeIcon icon={faClock} /> Prep Time: 20 minutes
          </div>
        </div>

        <div className="tab-body">
          <div className="tab-item">
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
          </div>
          <div className="tab-item">
            <h3>Instructions:</h3>
            <ol className="instructions">
              <li>Add the sliced peaches, sugar, and salt to a saucepan and stir to combine.</li>
              <li>Cook on medium heat for just a few minutes, until the sugar is dissolved and helps to bring out juices from the peaches. Remove from heat and set aside.</li>
              <li>Preheat oven to 350 degrees F. Slice butter into pieces and add to a 9x13 inch baking dish. Place the pan in the oven while it preheats, to allow the butter to melt. Once melted, remove the pan from the oven.</li>
              <li>In a large bowl mix together the flour, sugar, baking powder, and salt. Stir in the milk, just until combined. Pour the mixture into the pan, over the melted butter and smooth it into an even layer.</li>
              <li>Spoon the peaches and juice (or canned peaches, if using) over the batter. Sprinkle cinnamon generously over the top.</li>
              <li>Bake at 350 degrees for about 38-40 minutes. Serve warm, with a scoop of ice cream, if desired.</li>
            </ol>
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
  );
};

export default RecipeCard;
