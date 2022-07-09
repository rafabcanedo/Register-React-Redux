import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Pages
import Cadastro from './components/Pages/Cadastro/Cadastro';
import Home from './components/Pages/Home/Home';
import Alteracao from './components/Pages/alteracao/Alteracao';

export default function MainRouter(){
 return(
 <Routes>
  <Route path="/" element={<Cadastro />} />
  <Route path="/home" element={<Home />} />
  <Route path="/alteracao" element={<Alteracao />} />
 </Routes>
 );
}