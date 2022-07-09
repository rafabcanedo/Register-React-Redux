import React from 'react';
import './Home.css';

import { Link } from 'react-router-dom';

const Home = () => {
 return(
  <div className='main'>
   <div className='container'>
  <h1>Bem Vindo, $User </h1>
   

   <div className='button-alteracao'>
    <Link to='/alteracao'>
    <button>Alterar Dados</button>
    </Link>
   </div>
   </div>
  </div>
 )
}

export default Home;