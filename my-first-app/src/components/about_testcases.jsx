import React from 'react';
import { render } from '@testing-library/react';
import About from './About'; 

describe('About Component', () => {
  it('renders without crashing', () => {
    render(<About />);
  });

  it('displays the title "About Us!"', () => {
    const { getByText } = render(<About />);
    const title = getByText('About Us!');
    expect(title).toBeInTheDocument();
  });

  it('displays information about the purpose', () => {
    const { getByText } = render(<About />);
    const purposeText = getByText('The world is full of wonderful things!');
    expect(purposeText).toBeInTheDocument();
  });

  it('displays the "Meet the Team!" header', () => {
    const { getByText } = render(<About />);
    const meetTheTeamHeader = getByText('Meet the Team!');
    expect(meetTheTeamHeader).toBeInTheDocument();
  });

  it('displays information about team members', () => {
    const { getByText } = render(<About />);
    const anneInfo = getByText("My favourite cuisine is Vietnamese but for desserts I always head to Italy.");
    const bethInfo = getByText("I love watching tv shows and listening to music.");
    const georgiaInfo = getByText("My favourite food is Chinese but I do love a pizza!");
    const sophiaInfo = getByText("My favorite food is toast.");
    const sarahInfo = getByText("My favorite food is Mexican! As long as it is vegan.");
    const graceInfo = getByText("My favorite food is Thai, it is so flavourful and the perfect combination of taste profiles.");
    
    expect(anneInfo).toBeInTheDocument();
    expect(bethInfo).toBeInTheDocument();
    expect(georgiaInfo).toBeInTheDocument();
    expect(sophiaInfo).toBeInTheDocument();
    expect(sarahInfo).toBeInTheDocument();
    expect(graceInfo).toBeInTheDocument();
  });


});

