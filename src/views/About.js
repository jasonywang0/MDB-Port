import React from 'react';
import {
	MDBContainer,
    MDBRow,
    MDBCol,
    MDBListGroup, 
    MDBListGroupItem,
    MDBTypography
} from 'mdb-react-ui-kit';
import aboutMe from '../resources/aboutMe';
import Fade from '../components/Fade';
import { FaBootstrap, FaGitSquare, FaReact, FaSass, FaNode } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiMongodb, SiMysql, SiJquery } from 'react-icons/si';
import { VscEllipsis } from 'react-icons/vsc';


export default function About() {
  return (
    <MDBContainer id='about' fluid className='text-white align-items-center' style={{backgroundColor: '#191919', scrollMarginTop: '3.5rem'}}>

        <MDBRow className='justify-content-center py-4'>
            <MDBCol md={6} className='gx-5 pb-2'>
                <MDBTypography tag='div' className='text-center display-6 pb-3 mb-3 border-bottom tracking-in-expand' style={{fontFamily: "'Cinzel', serif", letterSpacing: '0.5rem'}}>
                    ABOUT
                </MDBTypography>
            </MDBCol>
        </MDBRow>

        <Fade>
            <MDBRow className='justify-content-center'>
                <MDBCol sm={8} md={6} lg={5} xl={3} className='gx-5 mb-4'>
                <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                    <img src='dog.jpg' className="img-fluid img-thumbnail" alt="portrait"/>
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                </div>
                </MDBCol>
            </MDBRow>
        </Fade>

        <Fade>
            <MDBRow className='py-4 justify-content-center'>
                <MDBCol md={7} xl={5} className='gx-5 mb-4'>
                    {/* <MDBTypography tag='h4'>
                    I am Jason Wang.
                    </MDBTypography> */}
                    <MDBTypography className='fs-4 lead mb-0 lh-l'>
                        {aboutMe}
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
        </Fade>

        <MDBRow className='pt-2 justify-content-center'>
            <MDBCol md={7} className='gx-5'>
                <h3 className="text-center" style={{fontFamily: "'Cinzel', serif", letterSpacing: '0.5rem'}}>SKILLS & TOOLS</h3>
            </MDBCol>
        </MDBRow>

        <Fade>
            <MDBRow className='justify-content-center'>

                <div className='col-12 col-sm-10 col-md-7 col-lg-6 col-xl-5 col-xxl-4 m-0 p-0 pt-3 justify-content-center'>
                    
                    <MDBListGroup horizontal className='flex-wrap align-items-center justify-content-center gap-4'>

                        <MDBListGroupItem className='p-0'>
                            <div className="d-flex figure">
                                <SiJavascript className='skill-icon image-main' size='5rem' title="javascript"></SiJavascript>
                                <span className='image-hover'>Java<br></br>Script</span>
                            </div>      
                        </MDBListGroupItem>
                        
                        <MDBListGroupItem className='p-0'>
                            <div className="d-flex figure">
                                <SiHtml5 className='skill-icon image-main' size='5rem' title="html5"></SiHtml5>
                                <span className='image-hover'>HTML5</span>
                            </div>      
                        </MDBListGroupItem>

                        <MDBListGroupItem className='p-0'>
                            <div className="d-flex figure">
                                <SiCss3 className='skill-icon image-main' size='5rem' title='css3'></SiCss3>
                                <span className='image-hover'>CSS3</span>
                            </div>     
                        </MDBListGroupItem>

                        <MDBListGroupItem className='p-0'>
                            <div className="d-flex figure">
                                <FaBootstrap className='skill-icon image-main' size='5rem' title="bootstrap"></FaBootstrap>
                                <span className='image-hover'>Boot<br></br>Strap</span>
                            </div>     
                        </MDBListGroupItem>

                        <MDBListGroupItem className='p-0'>
                            <div className="d-flex figure">
                                <SiJquery className='skill-icon image-main'size='5rem' title="jquery"></SiJquery>
                                <span className='image-hover'>jQuery</span>
                            </div>     
                        </MDBListGroupItem>

                        <MDBListGroupItem className='p-0'>
                            <div className="d-flex figure">
                                <FaSass className='skill-icon image-main' size='5rem' title="sass"></FaSass>
                                <span className='image-hover'>Sass</span>
                            </div>     
                        </MDBListGroupItem>

                        <MDBListGroupItem className='p-0'>
                            <div className="d-flex figure">
                                <FaReact className='skill-icon image-main' size='5rem' title="react"></FaReact>
                                <span className='image-hover'>React</span>
                            </div>     
                        </MDBListGroupItem>


                        <MDBListGroupItem className='p-0'>
                            <div className="d-flex figure">
                                <FaNode className='skill-icon image-main' size='5rem' title="node"></FaNode>
                                <span className='image-hover'>Node</span>
                            </div>     
                        </MDBListGroupItem>

                        
                        <MDBListGroupItem className='p-0'>
                            <div className="d-flex figure">
                                <SiMysql className='skill-icon image-main' size='5rem' title="mysql"></SiMysql>
                                <span className='image-hover'>MySQL</span>
                            </div>     
                        </MDBListGroupItem>

                        <MDBListGroupItem className='p-0'>
                            <div className="d-flex figure">
                                <SiMongodb className='skill-icon image-main' size='5rem' title="mongodb"></SiMongodb>
                                <span className='image-hover'>Mongo<br></br>DB</span>
                            </div>     
                        </MDBListGroupItem>

                        <MDBListGroupItem className='p-0'>
                            <div className="d-flex figure">
                                <FaGitSquare className='skill-icon image-main' size='5rem' title="git"></FaGitSquare>
                                <span className='image-hover'>Git</span>
                            </div>     
                        </MDBListGroupItem>

                        <MDBListGroupItem className='p-0'>
                            <div className="d-flex figure">
                                <VscEllipsis className='skill-icon image-main' size='5rem' title="etc"></VscEllipsis>
                                <span className='image-hover'>Etc.</span>
                            </div>     
                        </MDBListGroupItem>

                    </MDBListGroup>
                </div>
            </MDBRow>
        </Fade> 

    </MDBContainer>
  );
}
