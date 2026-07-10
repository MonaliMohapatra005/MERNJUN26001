import React, { useEffect } from 'react'
import './Navbar.css'

function Navbar() {
    useEffect(()=>{
        const isLogin= localStorage.getItem("isLogin")
    })


  return (
    <>
  
    <div className='nav-container'>nav logo</div>
    <button className='nav-btn'>
        {isLogin ? "profile" : "login"}
    </button>
    </>
  )
}

export default Navbar