import { Button } from "bootstrap";
import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link ,  } from "react-router-dom";
import ServiceServer from "../server-service";
import './navbar.style.css';
import { useNavigate } from "react-router-dom";


function NavbarMain(props) {
    let navigate = useNavigate();

    function handleLogOut(){
        props.setUser(null);
        navigate("/", { replace: true });

    }

    return (

        <Navbar bg="light" variant="light" >
            <Container>
                {props.currentUser && <Image className="rounded-circle"
                    src={ServiceServer.getUserUrl(props.currentUser)}
                    width="50"
                    height="50"
                />}
                <p></p>
                {props.currentUser && <button className="btn btn-outline-secondary" style={{marginLeft: "10px"}} onClick={handleLogOut}>Log Out</button>


                }



                <Nav className="me-auto">
                    {!props.currentUser && <Nav.Link as={Link} to="/">Home</Nav.Link>}
                    {!props.currentUser && <Nav.Link as={Link} to="/signin">Sign-In</Nav.Link>}
                    {!props.currentUser && <Nav.Link as={Link} to="/register">Registration</Nav.Link>}
                </Nav>
                <Navbar.Collapse className="justify-content-end">


                    {props.currentUser && <Navbar.Text>



                        Hello {ServiceServer.getUserNickname(props.currentUser)} ! {' '}

                    </Navbar.Text>}


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}


export default NavbarMain;
