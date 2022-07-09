import React from 'react';
import './Cadastro.css';

const Cadastro = () => {
 return(
  <div className='section'>
    <form className='cadastro'>
    <h1 className='title'>Bem Vindo</h1>

    <div className='wrap-input'>
      <label>Nome Completo</label>
      <input type="text" />
    </div>

    <div className='wrap-input'>
      <label>Email</label>
      <input type="email" />
    </div>

    <div className='wrap-input'>
      <label>Senha</label>
      <input type="password" />
    </div>

    <div className='wrap-input'>
      <label>Data de nascimento</label>
      <input type="date" />
    </div>

    <div className='wrap-input'>
      <label>CPF</label>
      <input type="number" />
    </div>

    <div className='button-submit'>
      <input type="submit" value="Cadastrar" />
    </div>
    </form>
  </div>
 )
}

export default Cadastro;

/*
Nome Completo
CPF
Email
Data de Nascimento
Senha
*/