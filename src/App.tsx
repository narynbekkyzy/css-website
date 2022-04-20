import React from "react";
import MainPage from "./assets/mainpage_img.svg";
import Blob from "./assets/blob.svg";
import klogo from "./assets/klogo.svg";
import discord from "./assets/discord.svg";
import insta from "./assets/insta.svg";
import "./App.css";

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
      <div className="MainPage-FooterContainer">
        <img className="MainPage-klogo" src={klogo} />

       
        <img className="MainPage-discord" src={discord} />
        <img className="MainPage-insta" src={insta} />
        
      </div>

      <img className="MainPage-Blob" src={Blob} />
    </div>
  );
};

export default App;
