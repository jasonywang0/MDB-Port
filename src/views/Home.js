import React from 'react';
import Navbar from "../components/Navbar"
import mountain from '../resources/mountain.jpg'

export default function Home() {
  return (
    <header>
        <Navbar />
      <div
        id="intro"
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${mountain})`}}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 id='greeting' className='mb-5'>Hello, World!</h1>
              <h2 id='i-am'>Nice to meet you.</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
