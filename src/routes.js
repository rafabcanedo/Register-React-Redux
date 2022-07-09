import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './components/Pages/Home/Home';
import Cadastro from './components/Pages/Cadastro/Cadastro';

export default function MainRouter(){
 return(
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/cadastro" element={<Cadastro />} />
 </Routes>
 );
}