import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/Buttons.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Starting point of the website. HTML root element defined and a React APP function is rendered on top
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //Strict Mode does not render anything, but is rather for diagnosing problems
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
