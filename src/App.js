import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import {Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Error from './Components/Errorpage';
import Pokemon from './Components/Pokemon';
import LoginSign from './Components/LoginSign/LoginSign';  //memanggil file loginsign


function App() {
    return (
        <div>
           <LoginSign />                            {/* Memanggil fungsi loginsign */}
        </div>
    );
}
export default App;

