import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './Home';

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
    </Routes>
  )
}
