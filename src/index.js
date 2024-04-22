import React from 'react';                        //library
import ReactDOM from 'react-dom';                 //library
import App from './App';                          //memanggil fungsi app dari app.js
import "./index.css";                             //memanggil file .css
import { BrowserRouter } from 'react-router-dom'; //untuk digunakan nanti  pindah page 

ReactDOM.render(
  <BrowserRouter>
    <App />                                      {/* Memanggil fungsi App */}
  </BrowserRouter>,
  document.getElementById('root')
);

