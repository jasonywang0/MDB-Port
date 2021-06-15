import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <MDBNavbar id="navbar" fixed className=''>
      <MDBContainer fluid className="justify-content-between">
        <MDBNavbarBrand className='fs-3 text-white' id="nav-brand" href='#home'>JASON WANG</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon className='fs-3' icon='bars' color='white' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav classname='fs-2'>

            <MDBNavbarItem classname='fs-2'>
              <MDBNavbarLink classname='fs-2' active aria-current='page' href='#intro'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active href='#about'>About</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='#projects'>Projects</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='#contact'>contact</MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}


@import 'mdb-react-ui-kit/dist/scss/bootstrap/functions';
@import 'mdb-react-ui-kit/dist/scss/bootstrap/variables';
@import 'mdb-react-ui-kit/dist/scss/bootstrap/mixins';


#navbar {
	font-family: 'Cinzel', serif;
	// background-color: rgba(13, 17, 19, 0.8);
	background-color: orange;
}

$start-spacing: $navbar-padding-y + $nav-link-height + $navbar-padding-y;

// navbar menu
.navbar-collapse {
	position: fixed;
	top: $start-spacing;
	right: 0;
	width: 28%;
	height: 100vh;
	background-color: white;
}

.navbar-collapse.collapsing {
	right: -75%;
	transition: height 0s ease-out;
}

.navbar-collapse.show {
	right: 0;
	transition: right 200ms ease-out;
}

.navbar-toggler.collapsed ~ .navbar-collapse {
	transition: right 300ms ease-in-out;
}

// WATCH OUT FOR SPECIFCITY!!!!!!!!! THE PROPERTIES ON TOP ARE SUPER SPECIFIC

@include media-breakpoint-up(sm) {
	#navbar {
	}
	.navbar-collapse {
		width: 18%;
		background-color: green;
	}
}

@include media-breakpoint-up(md) {
	#navbar {
	}

	.navbar-collapse {
		width: 18%;
		background-color: red;
	}
}

@include media-breakpoint-up(lg) {
	#navbar {
	}
	.navbar-collapse {
		width: 15%;
		background-color: blue;
	}

	// #nav-icon {
	// 	font-size: 2.5rem;
	// }
}
@include media-breakpoint-up(xl) {
	#navbar {
	}
	.navbar-collapse {
		width: 15%;
		background-color: orange;
	}

	// #nav-icon {
	// 	font-size: 2.5rem;
	// }
}

@include media-breakpoint-up(xxl) {
	#navbar {
	}
	.navbar-collapse {
		width: 10%;
		background-color: pink;
	}

	// #navbar .navbar-brand {
	// 	font-size: 3rem;
	// }

	// #nav-icon {
	// 	font-size: 3rem;
	// }

	// #nav-menu .nav-link {
	// 	color: #fff;
	// 	font-weight: 500;
	// }
}

// when you change break points, make sure to change the height of the navbar and navbar collapse together!
// @include media-breakpoint-up(xl) {
// 	#navbar {
// 		height: $start-spacing + 5rem;
// 	}
// 	.navbar-collapse {
// 		width: 15%;
// 		top: $start-spacing + 5rem;
// 		background-color: orange;
// 	}

// 	// #nav-icon {
// 	// 	font-size: 2.5rem;
// 	// }
// }
