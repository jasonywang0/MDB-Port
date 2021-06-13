    
import React from 'react';
import {
    MDBNavbar,
    MDBRow,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBtn,
    MDBIcon,
    MDBNavbarNav
  } from 'mdb-react-ui-kit';

const backgroundStyle = {
    height: '100vh',
    backgroundImage: 'url("https://mdbootstrap.com/img/new/fluid/city/018.jpg")'
}

const maskStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
}


export default function Home() {
    return (
        <MDBContainer fluid>
            <MDBRow>
                <div className='bg-image shadow-2-strong' style={backgroundStyle}>
                    <div className='mask' style={maskStyle}>
                        <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                            <h1 className='text-white mb-5'>Hello World!</h1>
                            <h1 className='text-white'>I am Jason Wang.</h1>
                        </div>
                    </div>
                </div>
            </MDBRow>
        </MDBContainer>
    )
}
