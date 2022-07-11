import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';

const User = () => {
 const { name } = useSelector(selectUser);
 return(
 <div>
    <h1>Bem Vindo,{name}</h1>
 </div>
 )
}

export default User;

/*
 const state = useSelector(state => state);

 console.log(state)
*/