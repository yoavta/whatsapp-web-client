import {Button, Dropdown, DropdownButton, Form, Modal} from "react-bootstrap";
import './welcome.style.css';
import React, {useState} from "react";
import SendImageVideo from "./send-image-video.component";
import massage from "./massage";
import SendVoice from "./send-voice.component";

function PoppingScreen(props) {
    const [show, setShow] = useState(false);
    const [type, setType] = useState(null);

    const [mediaPrev, setMediaPrev] = useState(null);


    function changeMediaPrev(mediaType) {


        //setMediaPrev(mediaType);
        setMediaPrev(mediaType)

    }

    const handleClose = () => {

        setShow(false);
        setMediaPrev(null)
    };

    const handleShow = () => setShow(true);

    function handleImgShow() {

        setShow(true);
        setType("image");
    }

    function handleVideoShow() {
        setShow(true);
        setType("video");
    }

    function handleVoiceShow() {
        setShow(true);
        setType("voice");
    }


    function mediaChanged() {

        props.setMsg(new massage(type, true, new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        }), mediaPrev, type))

    }

    function handleSend(event) {
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

            <DropdownButton
                key={'up'}
                id={`dropdown-button-drop-up`}
                drop={'up'}
                variant="secondary"
                title={<img src={require('../assets/paper-clipIcon.png')} width={"20px"} height={"20px"}/>}
                style={{position: "absolute", minWidth: 0}}
                align={{lg: 'end'}}

            >

                <Dropdown.Item eventKey="1" onClick={() => {
                    handleImgShow()
                }}><img src={require('../assets/pictureImg.png')} width={"20px"} height={"20px"}/></Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={() => {
                    handleVideoShow()
                }}><img src={require('../assets/videoIcon.png')}
                        width={"20px"}
                        height={"20px"}/></Dropdown.Item>
                <Dropdown.Item eventKey="3" onClick={() => handleVoiceShow()}><img
                    src={require('../assets/micIcon.png')}
                    width={"20px"}
                    height={"20px"}/></Dropdown.Item>


            </DropdownButton>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop={"static"}
                keyboard={false}
                centered={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Send {type}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {type !== 'voice' &&
                        <SendImageVideo type={type} mediaPrev={mediaPrev} setMediaPrev={changeMediaPrev}
                                        mediaChanged={mediaChanged}/>}
                    {type === 'voice' &&
                        <SendVoice type={type} mediaPrev={mediaPrev} setMediaPrev={setMediaPrev}
                                   mediaChanged={mediaChanged}/>}
                </Modal.Body>
                <Modal.Footer>
                    <Form onSubmit={handleSend}>
                        <Button variant="secondary" onClick={handleClose} style={{margin: '2px'}}>
                            Close
                        </Button>
                        <Button required={mediaPrev} type="submit" variant="success">
                            Send
                        </Button>
                    </Form>


                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PoppingScreen;