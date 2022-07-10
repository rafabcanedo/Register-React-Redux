import React from 'react';
import './Alteracao.css';

import { Link } from 'react-router-dom';

const Alteracao = () => {
 return (
  <div className='section'>
    <form className='cadastro'>
    
    <h1 className='title'>Alteracao de Dados</h1>

    <div className='form-container'>
      <div className='wrap-input'>
        <label>Nome Completo</label>
        <input 
        className='input-camp' 
        type="text" 
        placeholder='Digite seu novo Nome'
        />
      </div>

      <div className='wrap-input'>
      <label>Email </label>
      <input 
      className='input-camp' 
      type="email" 
      placeholder='Digite seu novo Email'
      />
     </div>

     <div className='wrap-input'>
      <label>Senha </label>
      <input 
      className='input-camp' 
      type="password" 
      placeholder='Digite sua nova Senha'
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
      placeholder='Digite seu novo CPF'
      />
     </div>
    </div>

  {/* Change style button*/}
    <div className='button-submit'>
      <Link to='/home'>
      <button className='form-button'>Atualizar</button>
      </Link>
    </div>

    </form>
  </div>
 )
}

export default Alteracao;