import React, {useEffect, useState} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import {Routes, Route} from 'react-router-dom';     //memanggil library agar bisa berpindah page 
import SignUp from './Components/LoginSign/SignUp'; //memanggil file Sign';
import Login from './Components/LoginSign/Login';   //memanggil file Login';
import ProtectedRoute from './Components/ProtectedRoute';
import Menu from './Components/Main/Menu'; //memanggil file Menu';
import MenuSD from './Components/Main/MenuSD';
import MenuSMP from './Components/Main/MenuSMP';
import MenuSMA from './Components/Main/MenuSMA';
import Box from './Components/Main/Box';
//import TestGet from './Components/LoginSign/TestGet'; memanggil file TestGet';



function App() {
    return (
        <div>
        <Routes>
            <Route path='/Dashboard' element={<Dashboard /> } /> 
            <Route path='/Register' element={<SignUp /> } />        {/* Memanggil fungsi Signup */}
            <Route path='/Login' element={<Login /> } />
            <Route path='/Menu' element={<ProtectedRoute> <Menu /> </ProtectedRoute>} />
            <Route path='/MenuSD' element={<MenuSD />} />
            <Route path='/MenuSMP' element={<MenuSMP />} />
            <Route path='/MenuSMA' element={<MenuSMA />} />
            <Route path='/Box' element={<Box/>} />
        </Routes>
        </div>
    ); 
}
export default App;

