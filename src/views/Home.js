import React from 'react';
import ProgressiveImage from 'react-progressive-bg-image';
import {
	MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import styled from 'styled-components';
 
const StyledProgressiveImage = styled(ProgressiveImage)`
  height: 100vh;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  position: relative;
`;

export default function Home() {
  return (
    <MDBContainer id="intro" fluid className='p-0 m-0'>
        <MDBRow className='p-0 m-0'>
            <MDBCol className='col-12 p-0 m-0 justify-content-center text-center align-items-center'>
                
                <StyledProgressiveImage
                  src='ring.jpg'
                  placeholder='ring-thumb.jpg'
                  transition="all 0.3s linear"
                />;

                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>

                <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%'}}>
                    <h1 id='greeting' className='fs-3 mb-3'>Hello, World!</h1>
                    <h2 id='nice' className='fs-5'>Nice to meet you.</h2>
                </div>

            </MDBCol>
        </MDBRow>
    </MDBContainer>
  );
}
