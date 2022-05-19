import ServiceServer from '../server-service';
import {Alert, Button, Card, Container, Form} from "react-bootstrap";
import React, {useState} from "react";
import './card-style.css';
import {Link, useNavigate} from "react-router-dom";


function Register(props) {
    let navigate = useNavigate();
    const [password, setPassword] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState(null);
    const [userName, setName] = useState(null);
    const [avatar, setAvater] = useState(null);
    const [alert, setAlert] = useState(false);
    const [nickname, setNickname] = useState(null)
    const [alertName, setAlertName] = useState(false);

    function strongPassword(password) {

        return (/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(password));
    }


    async function handleSubmit(event) {


        if (event.currentTarget.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {

            if (password === repeatPassword && strongPassword(password) && !ServiceServer.userExists(userName)) {

                event.preventDefault();
                event.stopPropagation();
                ServiceServer.addUser(userName, nickname, password, avatar).then(() => {
                    ServiceServer.signIn(userName).then(() => {
                        ServiceServer.getUser(userName).then(fetchedUser => props.setUser(fetchedUser)).then(() => {
                            navigate("/chat", {replace: true});
                        })
                    })
                })
            } else {
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

        if (ServiceServer.userExists(val)) {

            showAlertName()
        } else {
            hideAlertName()
        }

    }


    function handleAvaterChange(event) {
        const val = URL.createObjectURL(event.target.files[0]);

        setAvater(val);
    }


    function handleNicknameChange(event) {
        const val = event.target.value;
        setNickname(val);
    }

    function hideAlertName() {
        setAlertName(false);
        // window.location.reload();
    }

    function showAlertName() {
        setAlertName(true);
    }

    return (

        <div className="Register">

            <Card.Title>REGISTRATION</Card.Title>

            <Card id="card-style">

                <Container id="container-style">

                    <Form onSubmit={event => handleSubmit(event)}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control required type="text" placeholder="User Name"
                                          onChange={event => handleUserNameChange(event)}
                            />
                        </Form.Group>
                        <Alert style={{width: '100%'}} id={'special-alert'} variant="danger" onClose={() => {
                            hideAlertName()
                        }} show={alertName} dismissible>
                            The user name is exists! choose another one
                        </Alert>
                        <Form.Group className="mb-3" controlId="formBasicNickname">
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control required type="text" placeholder="Nickname"
                                          onChange={event => handleNicknameChange(event)}
                            />
                        </Form.Group>

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
                    <Alert style={{width: '100%'}} id={'special-alert'} variant="danger" onClose={() => {
                        hideAlert()
                    }} show={alert} dismissible>
                        The two passwords are not the same Or you dont have at least one letter and one number in the
                        password Or the user name is already exist.
                    </Alert>
                </Container>

            </Card>
        </div>
    );
}

export default Register;
