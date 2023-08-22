import React from 'react';
import logo from './logo.svg';
import RecipeCard from './components/recipe_card/recipe-card';
import RecipeCardTemplate from './components/recipe_card/RecipeCardTemplate';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Contact from './contact-page/contact'; 
import TestComponent from './TestComponent';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>All about us!</h1>
          <h2>Team 1</h2>
        </header>

        <nav>
          <ul className="App-nav_list">
            <li>
              <Link to="/recipe-card">Recipe Card</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/test">Test Component</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/recipe-card" element={<RecipeCard />} />
          <Route path="/about-us" element={<div className="App-ordered_list">{/* ... */}</div>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<TestComponent />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;