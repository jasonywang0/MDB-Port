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
    <MDBContainer fluid className='p-0 m-0 justify-content-center align-items-center'>
        <MDBRow>
            <MDBCol className='p-0 m-0 justify-content-center text-center align-items-center'>
                <StyledProgressiveImage
                src='ring.jpg'
                placeholder='ring-thumb.jpg'
                transition="all 0.3s linear"
                />;
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>

                <div className='text-white' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <h1 id='greeting' className='mb-5'>Hello, World!</h1>
                    <h2 id='i-am'>Nice to meet you.</h2>
                </div>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  );
}
