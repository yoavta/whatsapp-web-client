import ServiceServer from '../server-service';
import {Alert, Button, Card, Container, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import './sign-in.css';
import {useNavigate} from "react-router-dom";
import Welcome from "../components/welcome.component";
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
        debugger;
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
        const  val = event.target.value;
        setPassword(val);
        console.log(password);
    }

       async function handleUserNameChange(event) {
        const  val = event.target.value;
        setUserName(val);
        console.log(userName);
    }

    return (
        <div className="Sign-in">
        
            <Card id="card-style">
                <Container style={{width: "60%"}}>

                    <Form validated={validated} onSubmit={event => handleSubmit(event)}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control required type="text" placeholder="User Name"
                                onChange={event => handleUserNameChange(event)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type={passwordVisible ? "text" : "password"} placeholder="Password"
                                onChange={event => handlePasswordChange(event)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form">

                            <Form.Check type="checkbox" onClick={togglePassword} label="Show Password"/>
                        </Form.Group>
                        <Button className="btn btn-secondary" type="submit">
                            Submit
                        </Button>
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


}


export default SignIn;