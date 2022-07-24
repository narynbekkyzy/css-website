import React from 'react';
import './App.css';

import { Title } from './components/titles/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'images/logos/circleLogo.png'} className="App-logo" alt="logo" />
        <Title title={'This is a new title'} style="PrimaryRightBlack"/>
        <Title title={'This is another title'} style="PrimaryLeftBlack" />
        <p>
          Ronan has joined the team!! 👽
        </p>
        <h1 className='Montserrat'>Montserrat Font</h1>
        <h1 className='Inter'>Inter Font</h1>
        <h1 className='Aurebesh'>Aurebesh Font</h1>
        <h1 className='Aurebesh-English'>Aurebesh-English Font</h1>
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
