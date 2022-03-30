import ServiceServer from '../server-service';
import {Alert, Button, Card, Container, Form} from "react-bootstrap";
import React from "react";
import './sign-in.css';
import alert from "bootstrap/js/src/alert";
import {Navigate} from 'react-router-dom';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            password: null,
            validated: false,
            setValidated:false,
            alert: false,
        };

    }

    showAlert(event) {
        this.setState({alert: true});
    }

    hideAlert(event) {
        this.setState({alert: false});
        window.location.reload();
    }


    handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            this.setState({alert: false});
            this.state.userName = event.target[0].value;
            this.state.password = event.target[1].value;
            const isValid = ServiceServer.checkValidUser(this.state.userName, this.state.password);
            if (isValid) {
                this.props.setUser(this.state.userName);
                this.props.successful();
            } else {
                this.showAlert();
                event.preventDefault();
            }
        }
    }

    render() {
        return (
//             <Card className="text-center">
//   <Card.Header>Featured</Card.Header>
//   <Card.Body>
//     <Card.Title>Special title treatment</Card.Title>
//     <Card.Text>
//       With supporting text below as a natural lead-in to additional content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
//   <Card.Footer className="text-muted">2 days ago</Card.Footer>
// </Card>
            <div className="Sign-in" >
                <Card style={{padding: "20px"}}>
                <Container style={{width: "60%"}}>

                    <Form validated={this.state.validated} onSubmit={this.handleSubmit}>
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
                        this.hideAlert()
                    }} show={this.state.alert} dismissible>
                        The user name or the password is incorrect.
                    </Alert>
                </Container>
            </Card>
                </div>
        );
    }


}


export default SignIn;