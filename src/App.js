import logo from './logo.svg';
import './App.css';

import React, {useState} from "react";

function App() {
  const [number, setNumber] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HELLO WORLD!
        </p>

        <p>
          This is Sam's site, we will one day rule the world!
        </p>

        <div className="button" onClick={() => setNumber((number + 1))}>
          INCREASE GROFIT
        </div>

        <div>
          <code>{number}</code>
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>


        <a
          className="App-link"
          href="https://www.churchofjesuschrist.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discover the Stuff
        </a>
      </header>
    </div>
  );
}

export default App;
