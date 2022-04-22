import ServiceServer from '../server-service';
import {Alert, Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import './sign-in.css';
import {Link, useNavigate} from "react-router-dom";
import './card-style.css';


// class SignIn extends React.Component {


function SignIn(props) {
    let navigate = useNavigate();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [validated, setValidated] = useState(false);
    const [alert, setAlert] = useState(false);


    async function handleSubmit(event) {
        ServiceServer.printAllUsers();
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

        } else {
            setValidated(true);
            const isValid = ServiceServer.checkValidUser(userName, password);
            if (isValid) {
                props.setUser(userName);
                navigate("/chat", {replace: true});
            } else {
                showAlert();
            }
            // })

        }
    }

    function showAlert() {
        setAlert(true);
    }

    function hideAlert() {
        setAlert(false);
        window.location.reload();
    }


    function togglePassword() {
        setPasswordVisible(!passwordVisible);
    }

    async function handlePasswordChange(event) {
        const val = event.target.value;
        setPassword(val);
        console.log(password);
    }

    async function handleUserNameChange(event) {
        const val = event.target.value;
        setUserName(val);
        console.log(userName);
    }


    return (
        <div className="Sign-in">

            <Card id="card-style">
                <Container style={{width: "fluid%"}}>

                    <Form  validated={validated} onSubmit={event => handleSubmit(event)}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Row className="justify-content-md-center">

                                <Col sm xs lg="8" md={"auto"}>

                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control required type="text" placeholder="User Name"
                                                  onChange={event => handleUserNameChange(event)}
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Row className="justify-content-md-center">
                              <Col sm xs lg="1">
                            </Col>
                            <Col sm xs lg="8" md={"auto"}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control style={{width: '100%'}} required
                                                  type={passwordVisible ? "text" : "password"}
                                                  placeholder="Password"
                                                  onChange={event => handlePasswordChange(event)}
                                    />
                                </Form.Group>

                            </Col>
                            <Col sm xs lg="1">

                                {/*<Container style={{maxWidth: '40%'}}>*/}
                                <Form.Group controlId="formBasicPasswordShow">
                                    <Form.Label></Form.Label>

                                    <Form.Check type="checkbox" onClick={togglePassword} label={"show password"}/>
                                </Form.Group>
                                {/*</Container>*/}
                            </Col>
                        </Row>
                        <Button className="btn btn-secondary" type="submit">
                            Submit
                        </Button>
                        <Form.Group>

                                 <Form.Text>still dont have a user? </Form.Text>     <Form.Text style={{color:"blue"}}  as={Link} to="/register"> Create an account.</Form.Text>
                        </Form.Group>
                    </Form>
                    <Alert id={'special-alert'} variant="danger" onClose={() => {
                        hideAlert()
                    }} show={alert} dismissible>
                        The user name or the password is incorrect.
                    </Alert>
                </Container>
            </Card>


        </div>
    );
//
//

}


export default SignIn;