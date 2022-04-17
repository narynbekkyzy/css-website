<<<<<<< HEAD
import React from "react";
import MainPage from "./assets/mainpage_img.svg";
import Blob from "./assets/blob.svg";
import klogo from "./assets/klogo.svg";
import discord from "./assets/discord.svg";
import insta from "./assets/insta.svg";
import "./App.css";
=======
import React from 'react'
import './App.css'
import MainPageImg from './assets/images/mainpage_img.svg'
import Blob from './assets/images/blob.svg'
import Logo from'./assets/images/k_logo.svg'
import Ig from'./assets/images/ig.svg'
import Dc from'./assets/images/dc.svg'
>>>>>>> d706f55 (The footer)

const App: React.FC = () => {
  return (
    <div className="MainPage">
      <div className="MainPage-BodyContainer">
        <div className="MainPage-BodyContainer-Left">
          <h1>
            <span>C</span>omputer <span>S</span>cience <span>S</span>ociety
          </h1>

          <p>It's time to code to change the world</p>

          <div className="MainPage-BodyContainer-Left-ButtonsContainer">
            <button>&nbsp;Mission&nbsp;</button>
            <button>&nbsp;Team&nbsp;</button>
            <button>&nbsp;Events&nbsp;</button>
            <button>&nbsp;Projects&nbsp;</button>
            <button>&nbsp;Opportunities&nbsp;</button>
          </div>
        </div>

        <div className="MainPage-BodyContainer-Right">
          <img src={MainPage} />
        </div>
      </div>
<<<<<<< HEAD
      <div className="MainPage-FooterContainer">
        <img className="MainPage-klogo" src={klogo} />

       
        <img className="MainPage-discord" src={discord} />
        <img className="MainPage-insta" src={insta} />
        
      </div>

      <img className="MainPage-Blob" src={Blob} />
=======
      <div className='MainPage-FooterContainer'>
          <img id='logo' src={Logo}></img>
          <img id='dc' src={Dc}></img>
          <img id='ig' src={Ig}></img>
      </div>
      
      <img className="MainPage-Blob" src={Blob}></img>

>>>>>>> d706f55 (The footer)
    </div>
  );
};

export default App;
