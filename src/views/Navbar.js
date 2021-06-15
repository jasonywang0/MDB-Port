import React, { useState } from 'react';
  import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
  } from 'mdb-react-ui-kit';

export default function App() {
  const [showNavExternal, setShowNavExternal] = useState(false);

  return (
    <>
      <div id="sidenav" className={`sidenav fs-5 ${showNavExternal ? 'open' : ''}`}>
        <a href="#intro">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    
      <MDBNavbar style={{height: '3.5rem'}} light style={{backgroundColor: '#bc9864'}} fixed>
        <MDBContainer fluid className='justify-content-between'>
        <MDBNavbarBrand href='#home'className='fw-bold' style={{fontFamily: "'Cinzel', serif"}}>JASON WANG</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#sidenav'
            aria-controls='sidenav'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal(!showNavExternal)}
          >
            <MDBIcon icon='bars' fas  />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}