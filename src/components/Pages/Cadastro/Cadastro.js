import React, { useState } from 'react';
import './Cadastro.css';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeUser } from '../../../redux/userSlice';

const Cadastro = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(changeUser(name))
  }

 return(
  <div className='section'>
    <form className='cadastro'>
    
    <h1 className='title'>Bem Vindo</h1>

    <div className='form-container'>
    <div className='wrap-input'>
      <label>Nome Completo </label>
      <input 
      className='input-camp' 
      type="text" 
      placeholder='Digite seu Nome'
      onChange={(e) => setName(e.target.value)}
      />
    </div>

     <div className='wrap-input'>
      <label>Email </label>
      <input 
      className='input-camp' 
      type="email" 
      placeholder='Digite seu email'
      />
     </div>

     <div className='wrap-input'>
      <label>Senha </label>
      <input 
      className='input-camp' 
      type="password" 
      placeholder='Digite uma senha'
      />
     </div>

     <div className='wrap-input'>
      <label>Data de nascimento </label>
      <input 
      className='input-camp' 
      type="date" 
      />
     </div>

     <div className='wrap-input'>
      <label>CPF </label>
      <input 
      className='input-camp' 
      type="number" 
      placeholder='Digie seu CPF'
      />
     </div>
    </div>


    <div className='button-submit'>
      <Link to='/home'>
      <button className='form-button' onClick={handleLogin}>Cadastrar</button>
      </Link>
    </div>

    
    </form>
  </div>
 )
}

export default Cadastro;

// o form-container ficou muito centralizado, talvez seja bom mudar...

// <input type="submit" value="Cadastrar" />