import React from 'react';
import './Home.css';
import Button from '../../Logout';
import User from '../../User';

import { Link } from 'react-router-dom';

const Home = () => {
 return(
  <div className='main'>
   <div className='container'>
   
   <div className='home'>
   <User />
   
   <h3>Equipe $Empresa aqui</h3>
   
   <text className='text'>
    Aqui na $Empresa, temos toda a atenção ao usuário <br />
    Em nossa home você tem acesso aos seus dados cadastrais e caso queira <br />
    é possível altera-los para nos manter sempre atualizado. <br />
    Caso tenha alguma dúvida, por favor entre na aba de contatos <br />
    ou nos envie um email.
    </text>

    </div>

   <div className='button-alteracao'>
    <Link to='/alteracao'>
    <button className='home-button'>Alterar Dados</button>
    </Link>

    <div className="button-alteracao">
    <Link to='/'>
    <Button />
    </Link>
    </div>
    
   </div>
   </div>
  </div>
 )
}

export default Home;

// If we want a project more organization, we building a more divs
// for H1, H3 and one div for Text and more informations