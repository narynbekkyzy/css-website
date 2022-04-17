import React from 'react'
import './App.css'
import MainPageImg from './assets/images/mainpage_img.svg'
import Blob from './assets/images/blob.svg'

const App: React.FC = () => {
  return (
    <div className='MainPage'>
      <div className='MainPage-BodyContainer'>
        <div className='MainPage-BodyContainer-Left'>
          <h1>
            <span>C</span>omputer&nbsp;
            <span>S</span>cience&nbsp;
            <span>S</span>ociety
          </h1>
          <h2>
            It’s time to code 
            to change the world.
          </h2>
          <div className='MainPage-BodyContainer-Left-ButtonsContainer'>
            <button>&nbsp;Mission&nbsp;</button>
            <button>&nbsp;Team&nbsp;</button>
            <button>&nbsp;Events&nbsp;</button>
            <button>&nbsp;Projects&nbsp;</button>
            <button>&nbsp;Opportunities&nbsp;</button>
          </div>
        </div>

        <div className='MainPage-BodyContainer-Right'>
            <img src={MainPageImg}>
            </img>
        </div>
      </div>
      <div className='MainPage-FooterContainer'>

      </div>
      
      <img className="MainPage-Blob" src={Blob}></img>
    </div>
  )
}

export default App
