import React, {useEffect, useState} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import {Routes, Route} from 'react-router-dom';     //memanggil library agar bisa berpindah page 
import Header from './Components/Header';
import Error from './Components/Errorpage';
import Pokemon from './Components/Pokemon';
import SignUp from './Components/LoginSign/SignUp'; //memanggil file Sign';
import Login from './Components/LoginSign/Login';   //memanggil file Login';
//import TestGet from './Components/LoginSign/TestGet'; memanggil file TestGet';



function App() {
    return (
        <div>
        <Routes>
            <Route path='/' element={<SignUp /> } />        {/* Memanggil fungsi Signup */}
            <Route path='/Login' element={<Login /> } />
            <Route path='/Dashboard' element={<Dashboard /> } /> 
            <Route path='/Getdata' element={<TestGet />} />
        </Routes>
        </div>
    ); 
}
export default App;

