import React from 'react';
import {
	MDBContainer,
    MDBRow,
    MDBCol,
    MDBListGroup, 
    MDBListGroupItem,
    MDBTypography,
    MDBInputGroup,
    MDBInputGroupText,
    MDBInput,
    MDBInputGroupElement
} from 'mdb-react-ui-kit';
import aboutMe from '../resources/aboutMe';
import { FaBootstrap, FaGitSquare, FaReact, FaSass, FaNode } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiMongodb, SiMysql, SiJquery, SiFireBase } from 'react-icons/si';
import { VscEllipsis } from 'react-icons/vsc';

export default function Contact() {
  return (
    <MDBContainer id='contact' fluid className='text-white pb-5' style={{backgroundColor: '#191919'}}>

        <MDBRow className='justify-content-center pt-3'>
            <MDBCol md={6} className='gx-5 mb-2 text-center'>
                <MDBTypography tag='div' className='display-6 pb-3 mb-3 border-bottom tracking-in-expand' style={{fontFamily: "'Cinzel', serif", letterSpacing: '0.5rem'}}>
                    CONTACT
                </MDBTypography>
            </MDBCol>
        </MDBRow>

        <MDBRow className='justify-content-center'>
            
            <div class="col-sm-9 col-md-8 col-lg-6 col-xl-5">

                <div id="form-message-warning" class="mb-4 w-100 text-center"></div>
                <div id="form-message-success" class="mb-4 w-100 text-center">
                    Your message was sent, thank you!
                </div>

                <form method="POST" id="contactForm" name="contactForm" class="contactForm" novalidate="novalidate">
                    <div class="row p-0 m-0">
                        <div class="col-md-12 my-2">
                            <div class="form-group">
                                <input type="text" class="form-control" name="name" id="name" placeholder="Name"/>
                            </div>
                        </div>

                        <div class="col-md-12 my-2">
                            <div div class="form-group">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Email"/>
                            </div>
                        </div>

                        <div class="col-md-12 my-2">
                            <div class="form-group">
                                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"/>
                            </div>
                        </div>

                        <div class="col-md-12 my-2">
                            <div class="form-group">
                                <textarea 
                                    name="message" 
                                    class="form-control error" 
                                    id="message" 
                                    cols="30" 
                                    rows="8" 
                                    placeholder="Message" 
                                    aria-invalid="true" 
                                ></textarea>
                                {/* <label id="message-error" class="error" for="message">Please enter a message</label> */}
                            </div>
                        </div>
                
                        <div class="col-md-12 my-2">
                            <div class="form-group">
                                <input id="submit-message" type="submit" value="Send Message" class="btn btn-primary"/>
                                <div class="submitting"></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </MDBRow>

    </MDBContainer>
  );
}
