import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function NavbarMain(props) {
    return (

        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/signin">Sign-In</Nav.Link>
                    <Nav.Link as={Link} to="/register">Registertion</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">

                    {props.currentUser && <Navbar.Text>
                        Hello {props.currentUser} !
                    </Navbar.Text>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}


export default NavbarMain;
