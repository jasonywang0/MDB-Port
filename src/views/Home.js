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
  width: 100vw;
  background-size: cover;
  background-position: center center;
  position: absolute;
`;

export default function Home() {
  return (
    <MDBContainer id="intro" fluid className='p-0 m-0'>
        <StyledProgressiveImage
          src='ring.jpg'
          placeholder='ring-thumb.jpg'
          transition="all 0.3s linear"
        />
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
        <MDBRow className='p-0 m-0 h-100 text-center align-items-center'>
            <MDBCol className='p-0 m-0'>
                <h1 id='greeting' className='fs-3 mb-3'>Hello, World!</h1>
                <h2 id='nice' className='fs-3'>Nice to meet you.</h2>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  );
}
