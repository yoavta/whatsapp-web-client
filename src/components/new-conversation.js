import './new-conversation.style.css'
import ServiceServer from "../server-service";
import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";

function NewConversation(props) {

    const [userName, setUserName] = useState(null);
    const [serverName, setServerName] = useState(null);
    const [nickname, setNickname] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleServerNameChange(event) {
        setServerName(event.target.value);
    }
        function handleNicknameChange(event) {
        setNickname(event.target.value);
    }
        function handleUserNameChange(event) {
        setUserName(event.target.value);
    }

    function handleAddConversation() {
        ServiceServer.addConversation(nickname,userName,serverName).then(()=>{
            handleClose();
            props.refresh(userName);
        })


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
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control style={{width: '100%'}} required
                                      type="text"
                                      placeholder="Nickname"
                                      onChange={event => handleNicknameChange(event)}
                        />
                                             <Form.Label>User Name</Form.Label>
                        <Form.Control style={{width: '100%'}} required
                                      type="text"
                                      placeholder="user name"
                                      onChange={event => handleUserNameChange(event)}
                        />
                                             <Form.Label>Server Name</Form.Label>
                        <Form.Control style={{width: '100%'}} required
                                      type="text"
                                      placeholder="serverName"
                                      onChange={event => handleServerNameChange(event)}
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