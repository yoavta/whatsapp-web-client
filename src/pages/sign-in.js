import ServiceServer from '../server-service';
import {Alert, Button, Card, Container, Form} from "react-bootstrap";
import React, {useState} from "react";
import './sign-in.css';
import { useNavigate } from "react-router-dom";


// class SignIn extends React.Component {


function SignIn(props) {
      let navigate = useNavigate();

    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [validated, setValidated] = useState(false);
    const [alert, setAlert] = useState(false);

    function handleSubmit(event) {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            setValidated(true);
            setAlert(false);
            setUserName(event.target[0].value);
            setPassword(event.target[1].value);
            const isValid = ServiceServer.checkValidUser(userName, password);
            if (isValid) {
                props.setUser(userName);
                navigate("/chat", { replace: true });
            } else {
                showAlert();
                // event.preventDefault();
            }
        }
    }

    function showAlert(event) {
        setAlert(true);
    }

    function hideAlert(event) {
        setAlert(false);
        window.location.reload();
    }

    return (
        <div className="Sign-in">
            <Card style={{padding: "20px"}}>
                <Container style={{width: "60%"}}>

                    <Form noValidate validated={validated} onSubmit={event => handleSubmit(event)}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control required type="text" placeholder="User Name"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
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