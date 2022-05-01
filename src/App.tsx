import React from 'react'
import './App.css'
import MainPageImg from './assets/images/mainpage_img.svg'
import Blob from './assets/images/blob.svg'

import { BrowserRouter, Switch, Route } from 'react-router-dom'


const App: React.FC = () => {
  return (
    <div className='MainPage'>
      <div className='MainPage-BodyContainer'>
        <div className='MainPage-BodyContainer-Left'>
          <h1>
<<<<<<< Updated upstream
            <span>C</span>omputer&nbsp;
            <span>S</span>cience&nbsp;
            <span>S</span>ociety&nbsp;
=======
            <h1><span>C</span>omputer&nbsp;</h1>
            <h1><span>S</span>cience&nbsp;</h1>
            <h1><span>S</span>ociety</h1>
>>>>>>> Stashed changes
          </h1>
          <h2>
            It's time to code 
            to change the world.
          </h2>
          <div className='MainPage-BodyContainer-Left-ButtonsContainer'>
<<<<<<< Updated upstream
          <button>&nbsp;Mission&nbsp;</button>
          <button>&nbsp;Team&nbsp;</button>
          <button>&nbsp;Events&nbsp;</button>
          <button>&nbsp;Projects&nbsp;</button>
          <button>&nbsp;Opportunities&nbsp;</button>
        </div>
=======
            <button>&nbsp;Mission&nbsp;</button>
            <button>&nbsp;Team&nbsp;</button>
            <button>&nbsp;Events&nbsp;</button>
            <button>&nbsp;Projects&nbsp;</button>
            <button>&nbsp;Opportunities&nbsp;</button>
          </div>
          <div id = "Mobile-Footer" className='MainPage-FooterContainer'>
          <img id='logo' src={Logo}></img>
          <img id='dc' src={Dc}></img>
          <img id='ig' src={Ig}></img>
      </div>
>>>>>>> Stashed changes
        </div>

        <div className='MainPage-BodyContainer-Right'>
          <img src={MainPageImg}>
          </img>
        </div>
      </div>
<<<<<<< Updated upstream
      <div className='MainPage-FooterContainer'>
=======
      <div id = "Desktop-Footer" className='MainPage-FooterContainer'>
          <img id='logo' src={Logo}></img>
          <img id='dc' src={Dc}></img>
          <img id='ig' src={Ig}></img>
      </div>
      
      <img className="MainPage-Blob" src={Blob}></img>
>>>>>>> Stashed changes

      </div>
    
    <img className='MainPage-Blob' src={Blob}></img>
    </div>
  )
}

export default App
