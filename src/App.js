import React, {useEffect, useState} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import About from './Components/About';
import {Routes, Route} from 'react-router-dom';     //memanggil library agar bisa berpindah page 
import SignUp from './Components/LoginSign/SignUp'; //memanggil file Sign';
import Login from './Components/LoginSign/Login';   //memanggil file Login';
import Menu from './Components/Main/Menu'; //memanggil file Menu';
//import TestGet from './Components/LoginSign/TestGet'; memanggil file TestGet';



function App() {
    return (
        <div>
        <Routes>
            <Route path='/Dashboard' element={<Dashboard /> } /> 
            <Route path='/Register' element={<SignUp /> } />        {/* Memanggil fungsi Signup */}
            <Route path='/Login' element={<Login /> } />
            <Route path='/Main' element={<Menu /> } />

        </Routes>
        </div>
    ); 
}
export default App;

