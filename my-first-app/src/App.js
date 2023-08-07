import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <header className="App-header">
        {/* Deleted the text that automatically appears here to add my own*/}
        <h1>All about us!</h1>        
        <h2>Team 1</h2>              
      </header>

      <ul className="App-ordered_list">
      <h2>Anne</h2> 
          <li>My favourite cuisine is Vietnamese but for desserts always head to Italy</li>
          <li>Outside the kitchen I like to run and cross-stitch.</li>
        
      <h2>Beth</h2> 
          <li> I love watching tv shows and listening to music</li>
          <li> When I'm not chilling in bed.. I go to boxing, something I have recently taken up</li>
      
      <h2>Georgia</h2>
        <li>My favourite food is Chinese but I do love a pizza!</li>
        <li>My hobbies include rock climbing, snowboarding and playing with my rabbits.</li>
      </ul>
    </div>
  );
}

export default App;
