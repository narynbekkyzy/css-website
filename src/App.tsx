import React from 'react'
import MainPage from './assets/mainpage_img.svg'
import './App.css'


const App: React.FC = () => {
  return (
    <div className='MainPage'>
     <div className='MainPage-BodyContainer'>
      <div className='MainPage-BodyContainer-Left'>
        <h1> 
          Computer Science Society
        </h1>

        <p>It's time to code to change the world</p>
        
        <div className='MainPage-BodyContainer-Left-ButtonsContainer'>
          <button>Mission</button>
          <button>Team</button>
          <button>Events</button>
          <button>Projects</button>
          <button>Opportunities</button>
          </div>
        </div>

        <div className='MainPage-BodyContainer-Right'>

    <img src={MainPage}/>
        </div>

       </div>
    <div className='MainPage-FooterContainer'>

      </div>


    </div>
  )
}

export default App
