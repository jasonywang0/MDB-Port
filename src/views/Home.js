import React from 'react';
// import ProgressiveImage from 'react-progressive-image';
import {
	MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';


const useProgressiveImg = (lowQualitySrc, highQualitySrc) => {
  const [src, setSrc] = React.useState(lowQualitySrc);
  React.useEffect(() => {
    setSrc(lowQualitySrc);
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);
  return [src, { blur: src === lowQualitySrc }];
};


const BlurredUpImage = () => {
  const [src, { blur }] = useProgressiveImg("./purple-thumb.jpg", "./purple.jpg");
  return (
      <div
        className='d-flex flex-column text-center align-items-center justify-content-center bg-image'      
        style={{
        height: '100vh',
          backgroundImage: `url(${src})`,
          objectFit: 'contain',
        filter: blur ? "blur(20px)" : "none",
        transition: blur ? "none" : "filter 0.3s ease-out",
      }}>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></div>
        <h1 id='greeting' className='mb-3'>Hello, World!</h1>
        <h2 id='nice'>Nice to meet you.</h2>
      </div>
  );
};

export default function Home() {
  return (
    <MDBContainer id="intro" fluid className='p-0 m-0'>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></div>
        <BlurredUpImage />
    </MDBContainer>
  );
}
