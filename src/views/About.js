import React from 'react';
import {
	MDBNavbar,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBContainer,
	MDBNavbarToggler,
	MDBCollapse,
	MDBNavbarBrand,
	MDBIcon,
    MDBBtn,
    MDBCol,
    MDBRow,
    MDBListGroup, 
    MDBListGroupItem
} from 'mdb-react-ui-kit';


export default function About() {
  return (
    <MDBContainer className='pt-4'>

        <MDBRow className='justify-content-center'>
            <MDBCol md={6} className='gx-5 mb-2 text-center'>
              <h1>WHO AM I</h1>
            </MDBCol>
        </MDBRow>

        <MDBRow className='justify-content-center'>
            <MDBCol md={5} className='gx-5 mb-4'>
              <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/slides/031.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
            </MDBCol>
        </MDBRow>

        <MDBRow className='justify-content-center'>
              <MDBCol md={7} className='gx-5 mb-4'>
                <h4><strong>Facilis consequatur eligendi</strong></h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
                  eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
                  sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
                </p>
                <p><strong>Doloremque vero ex debitis veritatis?</strong></p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque voluptate
                  nesciunt laborum incidunt. Officia, quam consectetur. Earum eligendi aliquam illum
                  alias, unde optio accusantium soluta, iusto molestiae adipisci et?
                </p>

              </MDBCol>
        </MDBRow>

        <MDBRow className='justify-content-center'>
              <MDBCol md={7} className='gx-5 mb-4'>
              <div>
      <MDBListGroup horizontal className='flex-fill'>
        <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
        <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
        <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
        <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
      </MDBListGroup>

      <MDBListGroup horizontal className='flex-fill'>
        <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
        <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
        <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
        <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
      </MDBListGroup>

      <MDBListGroup horizontal className='flex-fill'>
        <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
        <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
        <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
        <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
      </MDBListGroup>

      <MDBListGroup horizontal className='flex-fill'>
        <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
        <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
        <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
        <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
      </MDBListGroup>

      <MDBListGroup horizontal className='flex-fill'>
        <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
        <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
        <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
        <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
      </MDBListGroup>

      <MDBListGroup horizontal className='flex-fill'>
        <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
        <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
        <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
        <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
      </MDBListGroup>
    </div>

              </MDBCol>
        </MDBRow> 

    </MDBContainer>
  );
}



    //   <div className="container">
    //     <section>
    //       <div className="row">
    //         <div className="col-md-6 gx-5 mb-4">
    //           <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
    //             <img src="https://mdbootstrap.com/img/new/slides/031.jpg" className="img-fluid" />
    //             <a href="#!">
    //               <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
    //             </a>
    //           </div>
    //         </div>

    //         <div className="col-md-6 gx-5 mb-4">
    //           <h4><strong>Facilis consequatur eligendi</strong></h4>
    //           <p className="text-muted">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
    //             eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
    //             sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
    //           </p>
    //           <p><strong>Doloremque vero ex debitis veritatis?</strong></p>
    //           <p className="text-muted">
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque voluptate
    //             nesciunt laborum incidunt. Officia, quam consectetur. Earum eligendi aliquam illum
    //             alias, unde optio accusantium soluta, iusto molestiae adipisci et?
    //           </p>
    //         </div>
    //       </div>
    //     </section>
    // </div>