import React from 'react';
import logo from './logo.svg';
import RecipeCard from './components/recipe_card/recipe-card';
import RecipeCardTemplate from './components/recipe_card/RecipeCardTemplate';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import RecipeResultsPage from './components/recipe_results_page/RecipeResultsPage';

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
              <li>My favourite cuisine is Vietnamese but for desserts always head to Italy.</li>
              <li>Outside the kitchen I like to run and cross-stitch.</li>
              <li>I like running because it is a reason to go outside whils staying healthy.</li>
            </ul>

            <h2>Beth</h2>
            <ul>
              <li>I love watching tv shows and listening to music.</li>
              <li>When Im not chilling in bed.. I go to boxing, something I have recently taken up.</li>
              <li>I like boxing because it is active and requires working with others.</li>
            </ul>

            <h2>Georgia</h2>
            <ul>
              <li>My favourite food is Chinese but I do love a pizza!</li>
              <li>My hobbies include rock climbing, snowboarding and playing with my rabbits.</li>
              <li>I like rock climbing because it requires problem solving skills as well as physical strength.</li>
            </ul>

            <h2>Sophia</h2>
            <ul>
              <li>My favorite food is toast.</li>
              <li>I like to read books.</li>
              <li> I like reading because it has the potential to transport you to a whole new world.</li>
            </ul>

            <h2>Sarah</h2>
            <ul>
              <li>My favorite food is Mexican! As long as it is vegan.</li>
              <li>I like to look after my plants, go charity shopping, and go jogging or to the gym.</li>
              <li> I like looking after plants as it's interesting to learn about their different needs and they brighten up a room.</li>
            </ul>

            <h2>Grace</h2>
            <ul>
              <li>My favorite food is Thai, it is so flavourful and the perfect combination of taste profiles.</li>
              <li>I spend a lot of time playing video games -</li>
              <li>I love the way I use my brain when doing so, actively but also passively.</li>
            </ul>

          </div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
