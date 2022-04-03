import React from "react";
import {Navbar, Nav, Container, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import ServiceServer from "../server-service";
import './navbar.style.css';
function NavbarMain(props) {
    return (

        <Navbar bg="light" variant="light" >
            <Container>
                       <Image className="round-image"
                            src={ServiceServer.getUserUrl(props.currentUser)}
                            width="50"
                            height="50"
                        />
                 {!props.currentUser &&<Navbar.Brand as={Link} to="/">Home</Navbar.Brand>}
                <Nav className="me-auto">
                    {!props.currentUser && <Nav.Link as={Link} to="/signin">Sign-In</Nav.Link>}
                    {!props.currentUser && <Nav.Link as={Link} to="/register">Registertion</Nav.Link>}
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    {props.currentUser && <Navbar.Text>
                        Hello {props.currentUser} ! {' '}

                    </Navbar.Text>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}


export default NavbarMain;
