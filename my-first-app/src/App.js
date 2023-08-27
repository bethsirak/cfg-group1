import React from 'react';
import logo from './logo.svg';
import RecipeCard from './components/recipe_results_page/recipe-card';
import RecipeResultsPage from './components/recipe_results_page/RecipeResultsPage';
import RecipeDetailsPage from './components/recipe_results_page/RecipeDetailsPage';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/worldMap';
import Africa from './components/Continents/Africa';
import Asia from './components/Continents/Asia';
import SouthAmerica from './components/Continents/SouthAmerica';
import NorthAmerica from './components/Continents/NorthAmerica'
import Europe from './components/Continents/Europe';
import Oceania from './components/Continents/Oceania&Australia';
import MiddleEast from './components/Continents/MiddleEast';
import Carribbean from './components/Continents/Caribbean';
import CtrlAmerica from './components/Continents/CentralAmerica';
import Title from './Title-Header';
import World from './components/Continents/world';     



function App() {
  return (
      <div className="App">
        <div className='Title'>
          <Title/>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <ul className="App-nav_list">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <Link to="/recipe_results_page">Search Recipes</Link>
          </ul>
        </nav>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe_results_page" element={<RecipeResultsPage />} />
            <Route path="/recipe/:recipeUriSliced" element={<RecipeDetailsPage />} />


          <Route path="/recipe/:label" element={<RecipeCard />} />
          <Route path='/about' element={<About />} />
          <Route path='/Africa' element={<Africa />} />
          <Route path='/Asia' element={<Asia />} />
          <Route path='/South-America' element={<SouthAmerica />} />
          <Route path='/North-America' element={<NorthAmerica />} />
          <Route path='/Europe' element={<Europe />} />
          <Route path="/Oceania-Australia" element={<Oceania />} />
          <Route path='/Middle-East' element={<MiddleEast />} />
          <Route path='/Caribbean' element={<Carribbean />} />
          <Route path='/Central-America' element={<CtrlAmerica />} />
          <Route path='/recipes' element={<RecipeCard />} />
          <Route path='/World' element={<World />} />
          {/* <Route path='/community' element={<Community />}/> */}
           {/* <Route path='/blog' element={<Blog />} /> */}
          {/* <Route path="/about-us" element={<div className="App-ordered_list">         

          // </div>} /> */}
        </Routes>
          </div>
          <div>
            <Home />
          </div>
      </div>
  );
}

export default App;
