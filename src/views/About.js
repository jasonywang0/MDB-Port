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
import { FaBootstrap, FaGitSquare, FaReact, FaSass, FaNode } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiMongodb, SiMysql, SiJquery, SiFireBase } from 'react-icons/si';
import { VscEllipsis } from 'react-icons/vsc';

export default function About() {
  return (
    <MDBContainer fluid className='py-5 text-white' style={{backgroundColor: '#191919'}}>

        <MDBRow className='justify-content-center p-3'>
            <MDBCol md={6} className='gx-5 mb-2 text-center'>
                <MDBTypography tag='div' className='display-6 pb-3 mb-3 border-bottom tracking-in-expand' style={{fontFamily: "'Cinzel', serif", letterSpacing: '0.5rem'}}>
                    ABOUT
                </MDBTypography>
            </MDBCol>
        </MDBRow>


        <MDBRow className='justify-content-center'>
            <MDBCol sm={8} md={6} lg={5} xl={3} className='gx-5 mb-4'>
              <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/slides/031.jpg" className="img-fluid img-thumbnail" alt="portrait"/>
                  <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </div>
            </MDBCol>
        </MDBRow>

        <MDBRow className='justify-content-center'>
              <MDBCol md={7} className='gx-5 mb-4'>
                <MDBTypography tag='h4'>
                   I am Jason Wang.
                </MDBTypography>
                <MDBTypography className='fs-5 lead mb-0 lh-l'>
                    {aboutMe}
                </MDBTypography>
              </MDBCol>
        </MDBRow>

        <MDBRow className='justify-content-center pt-3'>
              <MDBCol md={7} className='gx-5'>
                <h3 className="text-center" style={{fontFamily: "'Cinzel', serif", letterSpacing: '0.5rem'}}>SKILLS & TOOLS</h3>
              </MDBCol>
        </MDBRow>

        <MDBRow className='justify-content-center'>
            <div className='justify-content-center m-0 p-0 pt-3 col-9 col-sm-6 col-lg-5 col-xl-4 col-xxl-4'>
                <MDBListGroup horizontal className='flex-wrap align-items-center justify-content-center gap-4 gap-sm-2 gap-lg-4 gap-xl-4 gap-xxl-2'>
                    <MDBListGroupItem className='p-1 m-1 p-xxl-3 m-xxl-2'><SiJavascript className='m-0 skill-icon' title="CSS3"></SiJavascript></MDBListGroupItem>
                    <MDBListGroupItem className='p-1 m-1 p-xxl-3 m-xxl-2'><SiHtml5 className='skill-icon' title="CSS3"></SiHtml5></MDBListGroupItem>
                    <MDBListGroupItem className='p-1 m-1 p-xxl-3 m-xxl-2'><SiCss3 className='skill-icon' title="CSS3"></SiCss3></MDBListGroupItem>
                    <MDBListGroupItem className='p-1 m-1 p-xxl-3 m-xxl-2'><FaBootstrap className='skill-icon' title="CSS3"></FaBootstrap></MDBListGroupItem>
                    <MDBListGroupItem className='p-1 m-1 p-xxl-3 m-xxl-2'><SiJquery className='skill-icon' title="CSS3"></SiJquery></MDBListGroupItem>
                    <MDBListGroupItem className='p-1 m-1 p-xxl-3 m-xxl-2'><FaSass className='skill-icon' title="CSS3"></FaSass></MDBListGroupItem>
                    <MDBListGroupItem className='p-1 m-1 p-xxl-3 m-xxl-2'><FaReact className='skill-icon' title="CSS3"></FaReact></MDBListGroupItem>
                    <MDBListGroupItem className='p-1 m-1 p-xxl-3 m-xxl-2'><FaNode className='skill-icon' title="CSS3"></FaNode></MDBListGroupItem>
                    <MDBListGroupItem className='p-1 m-1 p-xxl-3 m-xxl-2'><SiMysql className='skill-icon' title="CSS3"></SiMysql></MDBListGroupItem>
                    <MDBListGroupItem className='p-1 m-1 p-xxl-3 m-xxl-2'><SiMongodb className='skill-icon' title="CSS3"></SiMongodb></MDBListGroupItem>
                    <MDBListGroupItem className='p-1 m-1 p-xxl-3 m-xxl-2'><FaGitSquare className='skill-icon' title="CSS3"></FaGitSquare></MDBListGroupItem>
                    <MDBListGroupItem className='p-1 m-1 p-xxl-3 m-xxl-2'><VscEllipsis className='skill-icon' title="CSS3"></VscEllipsis></MDBListGroupItem>
                </MDBListGroup>
            </div>
        </MDBRow> 

    </MDBContainer>
  );
}
