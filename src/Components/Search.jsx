import React from 'react'
import './Search.css'
import Input from './Input'


function Search() {
  return (
    <>
      <div className='home1'>
        <div className='img'>
          <div className="main">
            <div className='mtext'>
              <h1>MEET YOUR PEOPLE.</h1>
              <h5>Choose where to stay and we'll show you who with!</h5>
              <img className='arrow' src="https://i.postimg.cc/mZYS2mZ3/arrow.webp" alt="" />
            </div>
            <div className='chat'>
              <img className='mt-3 ms-5' src="https://i.postimg.cc/MH6qB9CM/Whats-App-Image-2023-12-04-at-12-41-41-PM-removebg-preview.png" alt="" />
            </div>
          </div>
          <Input />
        </div>
      </div>
    </>
  )
}

export default Search