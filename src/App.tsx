import React from "react";
import { Card } from "./components/card/eventsCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={"images/logos/circleLogo.png"}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1 className="Montserrat">Montserrat Font</h1>
        <h1 className="Inter">Inter Font</h1>
        <h1 className="Aurebesh">Aurebesh Font</h1>
        <h1 className="Aurebesh-English">Aurebesh-English Font</h1>
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Card
          image={"images/TeslaPoster.png"}
          title={"My world just broke"}
          description={"React Rocks!"}
          date={"today!"}
          location={"1308 W. Lovell"}
        ></Card>
      </header>
    </div>
  );
}

export default App;
