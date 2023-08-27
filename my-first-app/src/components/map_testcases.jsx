import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import WorldMap from './WorldMap.jsx'; 

describe('WorldMap Component', () => {
  it('renders without crashing', () => {
    render(<WorldMap />);
  });

  it('displays the map', () => {
    const { getByTestId } = render(<WorldMap />);
    const map = getByTestId('world-map');
    expect(map).toBeInTheDocument();
  });

  it('calls handleClick when a region is clicked', () => {
    const handleClickMock = jest.fn();
    const { getByTestId } = render(<WorldMap handleClick={handleClickMock} />);
    const map = getByTestId('world-map'); 
    fireEvent.click(map);
    expect(handleClickMock).toHaveBeenCalled();
  });

  it('navigates to /recipe-card when the link is clicked', () => {
    const { getByText } = render(<WorldMap />);
    const link = getByText('Click on the map to search for some global Recipes!');
    fireEvent.click(link);
    
  });


});
