import React from 'react'
import './App.css'
import MainPageImg from './assets/images/mainpage_img.svg'

import { BrowserRouter, Switch, Route } from 'react-router-dom'


const App: React.FC = () => {
  return (
    <div>
      <div className='MainPage-BodyContainer'>
        <div className='MainPage-BodyContainer-Left'>
          <h1>
            Computer Science Society
          </h1>
          <h2>
            It's time to code 
            to change the world.
          </h2>
          <div className='MainPage-BodyContainer-Left-ButtonsContainer'>
          <button>Mission</button>
          <button>Team</button>
          <button>Events</button>
          <button>Projects</button>
          <button>Opportunities</button>
        </div>
        </div>

        <div className='MainPage-BodyContainer-Right'>
          <img src={MainPageImg}>
          </img>
        </div>
      </div>
      <div className='MainPage-FooterContainer'>

      </div>
   
    </div>
  )
}

export default App
