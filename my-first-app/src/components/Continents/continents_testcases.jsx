import React from 'react';
import { render } from '@testing-library/react';
import Africa from './Africa'; 
import Asia from './Asia';
import Caribbean from './Caribbean';
import CtrlAmerica from './CentralAmerica';
import Europe from './Europe';
import MiddleEast from './MiddleEast';
import NorthAmerica from './NorthAmerica';
import Oceania from './Oceania&Australia';
import SouthAmerica from './SouthAmerica';

describe('Africa Component', () => {
  it('renders without crashing', () => {
    render(<Africa />);
  });

  it('displays the continent name', () => {
    const { getByText } = render(<Africa />);
    const continentName = getByText('African Cuisines');
    expect(continentName).toBeInTheDocument();
  });

  it('displays information about Central African cuisine', () => {
    const { getByText } = render(<Africa />);
    const centralAfricanCuisine = getByText('Central African cuisine');
    expect(centralAfricanCuisine).toBeInTheDocument();
    
  });

  it('displays information about East African cuisine', () => {
    const { getByText } = render(<Africa />);
    const eastAfricanCuisine = getByText('East African cuisine');
    expect(eastAfricanCuisine).toBeInTheDocument();
    
  });



  it('displays a map image of Africa', () => {
    const { getByAltText } = render(<Africa />);
    const africaMapImage = getByAltText('Map of Africa');
    expect(africaMapImage).toBeInTheDocument();
    
  });
  

});

describe('Asia Component', () => {
  it('renders without crashing', () => {
    render(<Asia />);
  });

  it('displays the continent name', () => {
    const { getByText } = render(<Asia />);
    const continentName = getByText('Asian Cuisine');
    expect(continentName).toBeInTheDocument();
  });

  it('displays information about Central Asian cuisine', () => {
    const { getByText } = render(<Asia />);
    const centralAsianCuisine = getByText('Central Asian cuisine');
    expect(centralAsianCuisine).toBeInTheDocument();
  });

  it('displays information about East Asian cuisine', () => {
    const { getByText } = render(<Asia />);
    const eastAsianCuisine = getByText('East Asian cuisine');
    expect(eastAsianCuisine).toBeInTheDocument();
  });


  it('displays a map image of Asia', () => {
    const { getByAltText } = render(<Asia />);
    const asiaMapImage = getByAltText('Map of Asia');
    expect(asiaMapImage).toBeInTheDocument();
  });

});

describe('Caribbean Component', () => {
  it('renders without crashing', () => {
    render(<Caribbean />);
  });

  it('displays the cuisine name', () => {
    const { getByText } = render(<Caribbean />);
    const cuisineName = getByText('Caribbean Cuisine');
    expect(cuisineName).toBeInTheDocument();
  });

  it('displays information about Caribbean cuisine', () => {
    const { getByText } = render(<Caribbean />);
    const caribbeanCuisine = getByText('As a result of the colonization');
    expect(caribbeanCuisine).toBeInTheDocument();
  });

  it('displays a map image of the Caribbean', () => {
    const { getByAltText } = render(<Caribbean />);
    const caribbeanMapImage = getByAltText('Map of the Caribbean');
    expect(caribbeanMapImage).toBeInTheDocument();
  });

});

describe('CentralAmerica Component', () => {
  it('renders without crashing', () => {
    render(<CtrlAmerica />);
  });

  it('displays the cuisine name', () => {
    const { getByText } = render(<CtrlAmerica />);
    const cuisineName = getByText('Central American Cuisine');
    expect(cuisineName).toBeInTheDocument();
  });

  it('displays information about Central American cuisine', () => {
    const { getByText } = render(<CtrlAmerica />);
    const centralAmericanCuisine = getByText('Central America is a highly racially');
    expect(centralAmericanCuisine).toBeInTheDocument();
  });

  it('displays a map image of Central America', () => {
    const { getByAltText } = render(<CtrlAmerica />);
    const centralAmericaMapImage = getByAltText('Map of Central America');
    expect(centralAmericaMapImage).toBeInTheDocument();
  });

});

describe('Europe Component', () => {
  it('renders without crashing', () => {
    render(<Europe />);
  });

  it('displays the cuisine name', () => {
    const { getByText } = render(<Europe />);
    const cuisineName = getByText('European Cuisines');
    expect(cuisineName).toBeInTheDocument();
  });

  it('displays information about European cuisines', () => {
    const { getByText } = render(<Europe />);
    const europeanCuisineInfo = getByText('The cuisines of European countries are diverse, although there are some common characteristics that distinguish them from those of other regions.');
    expect(europeanCuisineInfo).toBeInTheDocument();
  });

  it('displays a map image of Europe', () => {
    const { getByAltText } = render(<Europe />);
    const europeMapImage = getByAltText('Europe');
    expect(europeMapImage).toBeInTheDocument();
  });

});

describe('MiddleEast Component', () => {
  it('renders without crashing', () => {
    render(<MiddleEast />);
  });

  it('displays the cuisine name', () => {
    const { getByText } = render(<MiddleEast />);
    const cuisineName = getByText('Middle Eastern Cuisines');
    expect(cuisineName).toBeInTheDocument();
  });

  it('displays information about Middle Eastern cuisines', () => {
    const { getByText } = render(<MiddleEast />);
    const middleEasternCuisineInfo = getByText('While Middle Eastern food encompasses a variety of cuisines, it\'s generally characterized by fragrant and copious spices, nuts, olive oil, and creamy elements.');
    expect(middleEasternCuisineInfo).toBeInTheDocument();
  });

  it('displays an image of the Middle East map', () => {
    const { getByAltText } = render(<MiddleEast />);
    const middleEastMapImage = getByAltText('Middle East Map');
    expect(middleEastMapImage).toBeInTheDocument();
  });

});

describe('NorthAmerica Component', () => {
  it('renders without crashing', () => {
    render(<NorthAmerica />);
  });

  it('displays the cuisine name', () => {
    const { getByText } = render(<NorthAmerica />);
    const cuisineName = getByText('North American Cuisine');
    expect(cuisineName).toBeInTheDocument();
  });

  it('displays information about North American cuisines', () => {
    const { getByText } = render(<NorthAmerica />);
    const northAmericanCuisineInfo = getByText('The cusine has been influenced by the countries from where its inhabitants migrated from, with the integration of local ingredients, traditional dishes have evolved.');
    expect(northAmericanCuisineInfo).toBeInTheDocument();
  });

  it('displays an image of the North America map', () => {
    const { getByAltText } = render(<NorthAmerica />);
    const northAmericaMapImage = getByAltText('North America Map');
    expect(northAmericaMapImage).toBeInTheDocument();
  });

});

describe('Oceania&Australia Component', () => {
  it('renders without crashing', () => {
    render(<Oceania />);
  });

  it('displays the cuisine name', () => {
    const { getByText } = render(<Oceania />);
    const cuisineName = getByText('Oceanic and Australian Cuisine');
    expect(cuisineName).toBeInTheDocument();
  });

  it('displays information about Oceania and Australian cuisines', () => {
    const { getByText } = render(<Oceania />);
    const oceaniaCuisineInfo = getByText('Since the region of Oceania consists of islands, seafood is a prominent part of the diet, with vegetables such as potatoes, sweet potato, taro and yams being the main starch.');
    expect(oceaniaCuisineInfo).toBeInTheDocument();
  });

  it('displays an image of the Oceania map', () => {
    const { getByAltText } = render(<Oceania />);
    const oceaniaMapImage = getByAltText('Oceania Map');
    expect(oceaniaMapImage).toBeInTheDocument();
  });

});

describe('SouthAmerica Component', () => {
  it('renders without crashing', () => {
    render(<SouthAmerica />);
  });

  it('displays the cuisine name', () => {
    const { getByText } = render(<SouthAmerica />);
    const cuisineName = getByText('South American Cuisine');
    expect(cuisineName).toBeInTheDocument();
  });

  it('displays information about South American cuisines', () => {
    const { getByText } = render(<SouthAmerica />);
    const southAmericaCuisineInfo = getByText('South American cuisine has many influenced due to the ethnic fusion of South America.');
    expect(southAmericaCuisineInfo).toBeInTheDocument();
  });

  it('displays an image of the South America map', () => {
    const { getByAltText } = render(<SouthAmerica />);
    const southAmericaMapImage = getByAltText('South America Map');
    expect(southAmericaMapImage).toBeInTheDocument();
  });

});