import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Logo from '../../assets/logo.png'
import { Image } from 'react-bootstrap'
import { logout } from '../../context/commonFunctions'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
function TopNav() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          {' '}
          <Image src={Logo} />{' '}
        </Navbar.Brand>
        <div className="ms-5 me-5">
          <Form inline>
            <div className="position-relative">
              <Form.Control type="text" placeholder="Search" />
              <FontAwesomeIcon icon={faSearch} className="position-absolute top-50 end-0 translate-middle-y pe-2" />
            </div>
          </Form>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/*<Nav className="me-auto">*/}
          {/*  <Nav.Link href="/">Home</Nav.Link>*/}
          {/*  <Nav.Link href="/about">About</Nav.Link>*/}
          {/*  <Nav.Link href="/buyers">Buyers</Nav.Link>*/}
          {/*  <Nav.Link href="#contact-us">Contact</Nav.Link>*/}
          {/*</Nav>*/}

          {!localStorage.getItem('token') && (
            <Nav className="me-0">
              <Nav.Link href="/login">
                <Button variant="text">Login</Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="/registration-intro">
                <Button>Signup</Button>
              </Nav.Link>
            </Nav>
          )}
          {localStorage.getItem('token') && (
            <div className="btn-group ">
              <button
                type="button"
                className="btn dropdown-toggle d-flex align-items-center font-color topbar-hover p-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user-circle fa-2x tcontainerbtn" id="iprofile"></i> Amal
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Setting
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={logout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNav
