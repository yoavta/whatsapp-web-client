import {Col, Image, Modal, Row} from 'react-bootstrap';
import React, {useState} from "react";


function DisplayMsg({massage, style}) {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);


    const handleClose = () => {
        setShow(false);
        console.log('close')
    }
    const handleShow = () => {
        setShow(true);
        console.log('show')
    }


    return (

        <div className="card" style={style}>
            <div className="card-body" style={{position: 'relative', textAlign: 'left'}}>

                <h6 className="card-subtitle mb-2 text-muted">{massage.date}</h6>
                {massage.mediaType === "text" && <p className="card-text">{massage.text}</p>}


                {massage.mediaType === "video" &&
                    <video style={{maxHeight: '200px', maxWidth: '200px'}} controls className={"center-block"}
                           src={massage.media}/>}
                <div is={'button'} style={{border: 'none', background: 'none', margin: 'none', cursor: 'zoom-in'}}
                     onClick={() => handleShow()}>

                    {massage.mediaType === "image" &&
                        <Image style={{maxHeight: '100px', maxWidth: '100px'}} className={"center-block"}
                               src={massage.media}/>}


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
                        <Col md={"auto"}>
                            {massage.mediaType === "image" &&
                                <Image className={"center-block"}
                                       src={massage.media}/>}
                        </Col>
                    </Row>

                </Modal.Body>

            </Modal>
        </div>


    );
}

export default DisplayMsg;