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
		<MDBNavbar expand="lg" light bgColor="light">
			<MDBContainer fluid>
				<MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
				<MDBNavbarToggler
					type="button"
					data-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={() =>
						setShowNavNoTogglerSecond(!showNavNoTogglerSecond)
					}
				>
					<MDBIcon icon="bars" fas />
				</MDBNavbarToggler>
				<MDBCollapse navbar show={showNavNoTogglerSecond}>
					<MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
						<MDBNavbarItem>
							<MDBNavbarLink active aria-current="page" href="#">
								Home
							</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink href="#">Link</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink
								disabled
								href="#"
								tabIndex={-1}
								aria-disabled="true"
							>
								Disabled
							</MDBNavbarLink>
						</MDBNavbarItem>
					</MDBNavbarNav>
					<form className="d-flex input-group w-auto">
						<input
							type="search"
							className="form-control"
							placeholder="Type query"
							aria-label="Search"
						/>
						<MDBBtn color="primary">Search</MDBBtn>
					</form>
				</MDBCollapse>
			</MDBContainer>
		</MDBNavbar>
	);
}
