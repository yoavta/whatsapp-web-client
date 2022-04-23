import './new-conversation.style.css'
import ServiceServer from "../server-service";
import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";

function NewConversation(props) {

    const [chatWith, setChatWith] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleNameChange(event) {
        setChatWith(event.target.value);
    }

    function handleAddConversation() {

        ServiceServer.addConversation(props.currentUser, chatWith);
        handleClose();
        props.refresh();

    }


    return (
        <div>
            <img id="icon_img" src={require('../assets/addChat.png')} onClick={handleShow}/>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Conversation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control style={{width: '100%'}} required
                                      type="text"
                                      placeholder="user name"
                                      onChange={event => handleNameChange(event)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddConversation}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>


    )


}

export default NewConversation