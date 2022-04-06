import {Container, Modal, Form, Card, Row, Col, Button} from "react-bootstrap";
import './welcome.style.css';
import {useState} from "react";
import SendImageVideo from "./send-image-video.component";
import ServiceServer from "../server-service";
import massage from "./massage";
import SendVoice from "./send-voice.component";

function PoppingScreen(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setMediaPrev(null)
    };
    const handleShow = () => setShow(true);
    const [mediaPrev, setMediaPrev] = useState(null);

    function mediaChanged(){
        props.setMsg(new massage('',true,new Date().toLocaleTimeString(),mediaPrev,props.type))
    }

    function handleSend(event) {
        debugger;
        event.preventDefault();
        event.stopPropagation();
        if (!mediaPrev) {
            return;
        }
        props.handleSubmit()
        handleClose();
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {props.type}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop={"static"}
                keyboard={false}
                centered={true}
            >
                <Modal.Header closeButton>
                  <Modal.Title>Send {props.type}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.type!=='voice'&&<SendImageVideo type={props.type} mediaPrev={mediaPrev} setMediaPrev={setMediaPrev} mediaChanged={mediaChanged}/>}
                    {props.type==='voice'&&<SendVoice type={props.type} mediaPrev={mediaPrev} setMediaPrev={setMediaPrev} mediaChanged={mediaChanged}/>}
                </Modal.Body>
                <Modal.Footer>
                    <Form onSubmit={handleSend}>
                        <Button variant="secondary" onClick={handleClose} style={{margin:'2px'}}>
                            Close
                        </Button>
                        <Button required={mediaPrev} type="submit" variant="success">
                            Send
                        </Button>
                    </Form>


                    {/*<Form.control  controlId="send" as='button' onClick={handleSend()} variant="success">Send</Form.control>*/}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PoppingScreen;