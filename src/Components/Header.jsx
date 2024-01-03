import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'

function Header({logged}) {

  const handleLogout = async()=>{
    await sessionStorage.clear()
  }
  return (
    <>
      <header>
        <div className='header'>
          <Link to={'/'}>
          <div className='d-flex'>
            <img className='logo my-2 ms-3' height={'50rem'} src="https://i.postimg.cc/4xZy5x9D/logo-removebg-preview.png" alt="" />
            <h1 className='fw-bold mt-3 headt'>BedSeeker</h1>
          </div>
          </Link>
          <div className='log'>
            {
              logged ?
            <a href="/"><button onClick={handleLogout} className='btn'>Logout</button></a>
            :
            <Link to={'/login'}> 
            <button className='btn'>Login</button>
            </Link>
            }
          </div>
        </div>

      </header>
    </>
  )
}

export default Header