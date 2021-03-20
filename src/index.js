import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import Shoe from './components/shoe/Shoe';
import "./components/shoe/shoe.scss";
// import App from './App';



ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Shoe />
  </React.StrictMode>,
  document.getElementById('root')
);


