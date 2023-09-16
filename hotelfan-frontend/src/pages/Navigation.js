import { memo } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Hotelplan from "assets/hotelplan_logo.svg";
import { NavLink } from "react-router-dom";

const Navigation = () => {

  return (
    <div className="navigation">
      <Navbar expand="md" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Hotelplan}
              width="80"
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto justify-content-center">
              <Nav.Link  as={NavLink} to="/explore" activeclassname="active-color-main-navbar">Explore</Nav.Link>
              <Nav.Link  as={NavLink} to="/match" activeclassname="active-color-main-navbar">Match</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default memo(Navigation);
