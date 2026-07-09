import { useState } from 'react'
import './App.css'
import Home from './Home'
import Resister from './Resister'
import { Routes, Route } from "react-router";
import AdminDash from './AdminDash';
import Proile from './Proile';
import Admin from './Admin';
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Resister />}/>
      <Route path='*' element={<>not found</>} />
      <Route path='/admin' element={<Admin />} >
      <Route index element={<AdminDash />} />
      <Route path='profile' element={<Proile/>} />

      </Route>

    </Routes>
    
    </>

  )
}

export default App     