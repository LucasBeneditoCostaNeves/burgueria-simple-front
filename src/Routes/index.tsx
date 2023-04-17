import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { PaginaDeCadastro } from '../Paginas/Cadastro';
import { PaginaDaDashboard } from '../Paginas/Dashboard';
import { PaginaDeLogin } from '../Paginas/Login';

export function RotasPrincipais () {
  
    return (
    <Routes>
        <Route path='/login' element={<PaginaDeLogin/>}></Route>
        <Route path='/cadastro' element={<PaginaDeCadastro/>}></Route>
        <Route path='/dashboard' element={<PaginaDaDashboard/>}></Route>
        <Route path='*' element={<PaginaDeLogin/>}></Route>
    </Routes>
  )
}
