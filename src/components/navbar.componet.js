import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function NavbarMain() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/signin">Sign-In</Nav.Link>
                    <Nav.Link href="/register">Registertion</Nav.Link>
                   
                </Nav>
            </Container>
        </Navbar>
    );

}


export default NavbarMain;
