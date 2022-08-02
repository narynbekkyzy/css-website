import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Title } from './components/titles/Title';
import { MainPage } from './pages/main/Main'
import data from './components/json/test.json'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Go to main page by accessing http://localhost:3000/main */}
        <Route 
            path="/main" 
            element={<MainPage/>}
        />

        <Route 
            path="/"
            element={OldStuff()}
        />
        </Routes>
      </Router>
    </div>
  );
}


function OldStuff(){
  return(
    <header className="App-header">
        <Title 
          name={'Primary'} 
          style={"RightWhite"} 
          text={data.title}
        />  
        <Title 
          name={'Main'} 
          text={""}
        />
        <img src={'images/logos/circleLogo.png'} className="App-logo" alt="logo" />
        <p>
          Ronan has joined the team!! 👽
        </p>
        <button>Default</button>
        <button className='default-white'>Default-White</button>
        <button className='header'>Header</button>
        <button className='footer'>Footer</button>
        <button className='FL-black'>FL-black</button>
        <button className='FL-white'>FL-white</button>
        <input placeholder='Search...' type='text' className='searchbox'></input>
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
  )
}


export default App;
