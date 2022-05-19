import {Col, Image, Modal, Row} from 'react-bootstrap';
import React, {useEffect, useState} from "react";
import "./displat-msg.style.css"
import ServiceServer from "../server-service";
import Message from "./massage";

function DisplayMsg({message, style,chatWith}) {
    const [show, setShow] = useState(false);
    // const [massage, setFullMessage] = useState(new Message('loading..',true,'00:00',null,'text'));
    // useEffect(() => {
    //     ServiceServer.getFullMessage(partMessage,chatWith).then(fullMessage=>setFullMessage(fullMessage))
    // },[partMessage,chatWith])

    const handleClose = () => {
        setShow(false);

    }
    const handleShow = () => {
        setShow(true);
    }

        function datePipe(date){
        return date.slice(11,16);
    }


    return (

        <div className="card" style={style} id='msg-card'>
            <div className="card-body" id='msg-text'>

                <h6 className="card-subtitle mb-2 text-muted">{datePipe(message.created)}</h6>
                {message.mediaType === "text" && <p className="card-text">{message.content}</p>}


                {message.mediaType === "video" &&
                    <video style={{maxHeight: '200px', maxWidth: '200px'}} controls className={"center-block"}
                           src={message.content}/>}

                {message.mediaType === "voice" &&
                    <audio controls src={message.content}/>}

                <div is={'button'} style={{border: 'none', background: 'none', margin: 'none', cursor: 'zoom-in'}}
                     onClick={() => handleShow()}>

                    {message.mediaType === "image" &&
                        <Image style={{maxHeight: '100px', maxWidth: '100px'}} className={"center-block"}
                               src={message.content}/>}


                </div>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row className="justify-content-md-center">
                        <Col>
                            {message.mediaType === "image" &&
                                <Image style={{maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto'}}
                                       src={message.content}/>}
                        </Col>
                    </Row>
                </Modal.Body>


            </Modal>
        </div>


    );
}

export default DisplayMsg;