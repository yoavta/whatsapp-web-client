import ServiceServer from '../server-service';
import {Alert, Button, Card, Container, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import './card-style.css';
import {Link, useNavigate} from "react-router-dom";


function Register(props) {
    let navigate = useNavigate();
    const [password, setPassword] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState(null);
    const [userName, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [avatar, setAvater] = useState(null);
    const [validated, setValidated] = useState(false);
    const [alert, setAlert] = useState(false);
    const [nickname, setNickname] = useState(null)

    function strongPassword(password) {
        debugger;
            return (/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(password));
        }


    async function handleSubmit(event) {


        if (event.currentTarget.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            if (password === repeatPassword && strongPassword(password)) {
                event.preventDefault();
                event.stopPropagation();
                ServiceServer.addUser(userName, nickname, password, avatar );
                ServiceServer.printAllUsers();
                props.setUser(userName);
                navigate("/chat", {replace: true});
            } else{
                event.preventDefault();
                event.stopPropagation();
                showAlert();
            }
        }


    }

    function showAlert() {
        setAlert(true);
    }

    function hideAlert() {
        setAlert(false);
        window.location.reload();
    }

    function handlePasswordChange(event) {
        const val = event.target.value;
        setPassword(val);
    }

    function handleReapeatPasswordChange(event) {
        const val = event.target.value;
        setRepeatPassword(val);
    }

    function handleUserNameChange(event) {
        const val = event.target.value;
        setName(val);

    }

    function handleEmailChange(event) {
        const val = event.target.value;
        setEmail(val);
    }

    function handleAvaterChange(event) {
        const val = URL.createObjectURL(event.target.files[0]);
        console.log(val);
        setAvater(val);
    }


    function handleNicknameChange(event) {
        const val = event.target.value;
        setNickname(val);
    }

    return (
        <div className="Register">
            <Card id="card-style">

                <Container style={{width: "60%"}}>

                    <Form onSubmit={event => handleSubmit(event)}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control required type="text" placeholder="User Name"
                                          onChange={event => handleUserNameChange(event)}
                            />
                        </Form.Group>
                         <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control required type="text" placeholder="Nickname"
                                          onChange={event => handleNicknameChange(event)}
                            />
                        </Form.Group>
                        {/*<Form.Group className="mb-3" controlId="formBasiceEmail">*/}
                        {/*    <Form.Label>Email address</Form.Label>*/}
                        {/*    <Form.Control required type="email" placeholder="Email address"*/}
                        {/*                  onChange={event => handleEmailChange(event)}*/}
                        {/*    />*/}
                        {/*</Form.Group>*/}
                        <Form.Group className="mb-3" controlId="formBasicPassword1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password"
                                          onChange={event => handlePasswordChange(event)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword2">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control required type="password" placeholder="Repeat Password"
                                          onChange={event => handleReapeatPasswordChange(event)}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicImage">


                            {/*<Form.Group className="mb-3" id="inputGroupFile01">*/}
                            <Form.Label>Choose Image</Form.Label>
                            <Form.Control type="file" accept="image/*"
                                          onChange={event => handleAvaterChange(event)}
                            />


                        </Form.Group>

                        <Button className="btn btn-secondary" type="submit">
                            Submit
                        </Button>
                        <Form.Group>

                            <Form.Text>
                                Already registered? </Form.Text> <Form.Text style={{color: "blue"}} as={Link}
                                                                            to="/signin"> click here</Form.Text>
                            <Form.Text> to login.</Form.Text>
                        </Form.Group>
                    </Form>
                    <Alert style={{width : '100%'}} id={'special-alert'} variant="danger" onClose={() => {hideAlert()}} show={alert} dismissible>
                        The two passwords are not the same Or you dont have at least one letter and one number in the password.
                    </Alert>
                </Container>

            </Card>
        </div>
    );
}

export default Register;
