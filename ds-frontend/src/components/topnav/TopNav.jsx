import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Logo from '../../assets/logo.png'
import { Image } from 'react-bootstrap'
import { logout } from '../../context/commonFunctions'
import CategoryIcon from '../../assets/images/navbar-icon/catagories-icon.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import {NavLink} from "react-router-dom";
import './topnav.scoped.css'
function TopNav() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          {' '}
          <Image src={Logo} />{' '}
        </Navbar.Brand>
        <div className="ms-5 me-5 d-flex align-items-center">
          <Form inline>
            <div className="position-relative">
              <Form.Control type="text" placeholder="Search" />
              <FontAwesomeIcon icon={faSearch} className="position-absolute top-50 end-0 translate-middle-y pe-2" />
            </div>
          </Form>
          <div>
            <button type="button" className="btn ms-3 " data-bs-toggle="collapse" data-bs-target="#categories-menu">
              <img src={CategoryIcon}   alt="Categories Menu" />
              Categories
            </button>

            <div className="collapse nav-categories" id="categories-menu">
              <ul className="list-unstyled">
                <li><NavLink to="/category1">Category 1</NavLink></li>
                <li><NavLink to="/category2">Category 2</NavLink></li>
                <li><NavLink to="/category3">Category 3</NavLink></li>
                <li><NavLink to="/category4">Category 4</NavLink></li>
                <li><NavLink to="/category5">Category 5</NavLink></li>
              </ul>
            </div>
          </div>

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
            <Nav className="m-auto me-0">
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
