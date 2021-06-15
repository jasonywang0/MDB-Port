import React from 'react';
import {
	MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBTypography,
    MDBRipple
} from 'mdb-react-ui-kit';

export default function Projects() {
  return (
    <MDBContainer fluid className='py-5 text-white' style={{backgroundColor: '#191919'}}>

        <MDBRow className='justify-content-center pb-3'>
            <MDBCol md={6} className='gx-5 mb-2 text-center'>
                <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom tracking-in-expand' style={{fontFamily: "'Cinzel', serif", letterSpacing: '0.5rem'}}>
                    Projects
                </MDBTypography>
            </MDBCol>
        </MDBRow>

        <MDBRow className='justify-content-center p-3'>
            <div class="col-10 col-md-3 col-l-3 col-xl-4 col-xxl-2 mb-4">
                <MDBRipple
                    className='bg-image hover-zoom shadow-5-strong rounded'
                    rippleTag='div'
                    rippleColor='dark'
                    >
                    <img src='cube.png' className='w-100 img-fluid' alt='discord-bot' />
                </MDBRipple>
            </div>

              <div class="col-md-8 col-xxl-7 mb-4">
                <h2><a href="https://chimstead.shinyapps.io/cubedata/" className='link-primary'>Cube Data Aggregation</a></h2>
               <MDBTypography className='fs-4 ' style={{fontFamily: ''}}>
                   An ongoing project maintained by web developers and a data scientist who tracks and analyzes winning Magic: The Gathering deck lists submitted from online communities.
                    Some of the major features include tracking card prevelance over time, win percentages, deck tracking, and recommended bot picks.
                </MDBTypography>

            <MDBBtn outline className='m-2' color='warning'>Java</MDBBtn>
            <MDBBtn outline className='m-2' color='info'>R</MDBBtn>
            <MDBBtn outline className='m-2' color='primary'>Bootstrap</MDBBtn>
            </div>
        </MDBRow>


        <MDBRow className='justify-content-center p-3'>
            <div class="col-10 col-md-3 col-l-3 col-xl-4 col-xxl-2 mb-4">
                <MDBRipple
                    className='bg-image hover-overlay shadow-5-strong rounded'
                    rippleTag='div'
                    rippleColor='light'
                    >
                    <img src='tgc.jpg' className='w-100 img-fluid' alt='discord-bot' />
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                </MDBRipple>
              </div>

              <div class="col-md-8 col-xxl-7 mb-4">
                <h2><a href="https://github.com/jasonywang0/The-Grand-Calcutron" className='link-primary'>The Grand Calcutron</a></h2>
                
                <MDBTypography className='fs-4' >
                     An active Discord bot responsible for providing CRUD services and social features for online communities. 
                    Some of the major features include an intuitive leveling and ranking system that can be completely and easily customized,
                    tag or url storage for each user, the ability to run CRUD operations via the Discord client, image generation, and url parsing and calls.
                </MDBTypography>
                
                <MDBBtn outline className='m-2' color='primary'>JavaScript</MDBBtn>
                <MDBBtn outline className='m-2' color='info'>Discord API</MDBBtn>
                <MDBBtn outline className='m-2' color='secondary'>Google Sheets API</MDBBtn>
                <MDBBtn outline className='m-2' color='success'>MongoDB</MDBBtn>
                <MDBBtn outline className='m-2' color='danger'>Node</MDBBtn>
            </div>

        </MDBRow>

        <MDBRow className='justify-content-center p-3'>
            <div class="col-10 col-md-3 col-l-3 col-xl-4 col-xxl-2 mb-4">
                <MDBRipple
                    className='bg-image hover-overlay shadow-5-strong rounded'
                    rippleTag='div'
                    rippleColor='light'
                >
                    <img src='gamego.png' className='w-100 img-fluid' alt='gamego website' />
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                </MDBRipple>
              </div>

              <div class="col-md-8 col-xxl-7 mb-4">
                <h2><a href="http://54.67.45.186/home.php" className='link-primary'>GameGo</a></h2>
                
                <MDBTypography className='fs-4'>
                    A functional game store mock-up written in PHP and hosted on Amazon Web Service EC2. Features a registration and login module, 
                    shopping cart and checkout features, in addition to an admin GUI to manipulate a MySQL database of games and users. 
                </MDBTypography>
                
                <MDBBtn outline className='m-2' color='primary'>PHP</MDBBtn>
                <MDBBtn outline className='m-2' color='info'>MySQL</MDBBtn>
                <MDBBtn outline className='m-2' color='secondary'>AWS</MDBBtn>
            </div>

        </MDBRow>



    </MDBContainer>
  );
}