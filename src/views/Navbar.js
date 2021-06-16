import React, { useState } from 'react';
  import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
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
    
      <MDBNavbar style={{height: '3.5rem', backgroundColor: '#bc9864'}} className='p-0' fixed>
        <MDBContainer fluid className='justify-content-between'>
        <MDBNavbarBrand href='/' className='fs-2' style={{fontFamily: "Cinzel, serif", color: 'black'}}>JASON WANG</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#sidenav'
            aria-controls='sidenav'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal(!showNavExternal)}
          >
            {
                showNavExternal 
                ? <MDBIcon icon='times' fas size='lg'/>
                : <MDBIcon icon='bars' fas size='lg'/>
            }  
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}