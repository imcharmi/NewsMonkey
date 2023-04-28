import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

export default function MainNavbar() {
  return (
    <div style={{ position: "sticky", top: "0", zIndex: "1" }}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="#home">NewsMonkey</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/business">
                <Nav.Link>business</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/entertainment">
                <Nav.Link>entertainment</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/health">
                <Nav.Link>health</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/science">
                <Nav.Link>science</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sports">
                <Nav.Link>sports</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/technology">
                <Nav.Link>technology</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
//this is for class componant
// export default class MainNavbar extends Component {
//   render() {
//     return (
//        navbar
//     );
//   }
// }
