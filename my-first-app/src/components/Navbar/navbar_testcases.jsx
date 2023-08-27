import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';


describe('Navbar Component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });

  it('displays the site title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const siteTitle = getByText('RECIPES BY REGION');
    expect(siteTitle).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const homeLink = getByText('Home');
    const aboutLink = getByText('About');
    const contactLink = getByText('Contact');
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

});
