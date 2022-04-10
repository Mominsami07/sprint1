import React from 'react';
import ReactDOM from 'react-dom';
// import './style.css';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);


{/* <div className="container-fluid nav_bg">
<div className="row">
  <div className="col-10 mx-auto"></div>
</div>
</div> */}