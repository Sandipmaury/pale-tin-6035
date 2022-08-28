import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import LoginPage from './LoginPage';

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginPage/>} />
    </Routes>
  )
}
