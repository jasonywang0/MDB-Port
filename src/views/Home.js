import React from 'react';
import Navbar from "../components/Navbar"
import '../styles/home.scss';

export default function Home() {
  return (
    <header>
        <Navbar />
      <div
        id="intro-example"
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg')" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-5'>Hello, World!</h1>
              <h2>I am Jason Wang.</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
