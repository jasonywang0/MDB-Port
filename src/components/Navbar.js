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
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Navbar() {
	const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = React.useState(false);

	return (
		<MDBNavbar expand ='lg' light bgColor="light" fixed="top" className='p-3'>
			<MDBContainer fluid>

				<MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
				
                <MDBNavbarToggler
					type="button"
					data-target="#navbarToggler"
					aria-controls="navbarToggler"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
				>
					<MDBIcon icon="bars" fas />
				</MDBNavbarToggler>

				<MDBCollapse navbar center show={showNavNoTogglerSecond} id='navbarToggler'>
					<MDBNavbarNav fullWidth={false} className="mb-2 mb-lg-0">
						<MDBNavbarItem>
							<MDBNavbarLink active aria-current="page" href="#">Home</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink href="#">Link</MDBNavbarLink>
						</MDBNavbarItem>
					</MDBNavbarNav>
				</MDBCollapse>


			</MDBContainer>
		</MDBNavbar>
	);
}
