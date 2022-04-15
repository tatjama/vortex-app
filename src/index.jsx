import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
import reportWebVitals from './reportWebVitals';

//const store = createStore(() => [], {/**Initial state */}, applyMiddleware());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

/*root.render(
  <Provider store = { store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
