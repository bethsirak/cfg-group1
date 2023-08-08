import React from 'react';
import logo from './logo.svg';
import RecipeCard from './components/recipe_card/recipe-card';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

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
          </ul>
        </nav>

        <Routes>
          <Route path="/recipe-card" element={<RecipeCard />} />

          <Route path="/about-us" element={<div className="App-ordered_list">
            <h2>Anne</h2>
            <ul>
              <li>My favourite cuisine is Vietnamese but for desserts always head to Italy</li>
              <li>Outside the kitchen I like to run and cross-stitch.</li>
            </ul>

            <h2>Beth</h2>
            <ul>
              <li>I love watching tv shows and listening to music</li>
              <li>When I'm not chilling in bed.. I go to boxing, something I have recently taken up</li>
            </ul>

            <h2>Georgia</h2>
            <ul>
              <li>My favourite food is Chinese but I do love a pizza!</li>
              <li>My hobbies include rock climbing, snowboarding and playing with my rabbits.</li>
            </ul>

            <h2>Sophia</h2>
            <ul>
              <li>My favorite food is ...</li>
              <li>I like to ...</li>
            </ul>
          </div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
