import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios'; 
import { MemoryRouter } from 'react-router-dom';
import RecipeResultsPage from './RecipeResultsPage'; 


jest.mock('axios');

describe('RecipeResultsPage Component', () => {
  it('renders without crashing', () => {
    render(<RecipeResultsPage />);
  });

  it('displays the banner text', () => {
    const { getByText } = render(<RecipeResultsPage />);
    const bannerText = getByText("START EXPLORING NOW Don't wait any longer.");
    expect(bannerText).toBeInTheDocument();
  });

  it('fetches recipes when search form is submitted', async () => {
    
    axios.get.mockResolvedValue({
      data: {
        hits: [
          { recipe: { uri: 'recipe_uri_1', image: 'image_url_1', label: 'Recipe 1' } },
          { recipe: { uri: 'recipe_uri_2', image: 'image_url_2', label: 'Recipe 2' } },
        ],
      },
    });

    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <RecipeResultsPage />
      </MemoryRouter>
    );

    const ingredientInput = getByPlaceholderText('Enter ingredient');
    const searchButton = getByText('Search');

   
    ingredientInput.value = 'chicken';
    searchButton.click();

    
    await waitFor(() => {
      const recipe1 = getByText('Recipe 1');
      const recipe2 = getByText('Recipe 2');
      expect(recipe1).toBeInTheDocument();
      expect(recipe2).toBeInTheDocument();
    });
  });

 
});
