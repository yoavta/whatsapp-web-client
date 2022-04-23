import {Button, Container, Row, Spinner} from "react-bootstrap";
import React, {useEffect, useRef, useState} from "react";

function SendVoice(props) {


    useEffect(() => {

        props.mediaPrev != null && props.mediaChanged()
    }, [props.mediaPrev])

    const [stream, setStream] = useState({
        isAccess: false,
        recorder: null,
        error: ""
    });

    const [recording, setRecording] = useState({
        active: false,
        available: false,
        url: ""
    });

    const chunks = useRef([]);

    function getAccess() {
        navigator.mediaDevices
            .getUserMedia({audio: true})
            .then((mic) => {
                let mediaRecorder;

                try {
                    mediaRecorder = new MediaRecorder(mic, {
                        mimeType: "audio/webm"
                    });
                } catch (err) {
                    console.log(err);
                }

                const track = mediaRecorder.stream.getTracks()[0];
                track.onended = () => console.log("ended");

                mediaRecorder.onstart = function () {
                    setRecording({
                        active: true,
                        available: false,
                        url: ""
                    });
                };

                mediaRecorder.ondataavailable = function (e) {

                    chunks.current.push(e.data);
                };

                mediaRecorder.onstop = async function () {


                    const url = URL.createObjectURL(chunks.current[0]);
                    props.setMediaPrev(url);
                    chunks.current = [];

                    setRecording({
                        active: false,
                        available: true,
                        url
                    });
                };

                setStream({
                    ...stream,
                    isAccess: true,
                    recorder: mediaRecorder
                });
            })
        ;
    }

    return (

        <Container>

            {stream.isAccess ? (
                <div className="audio-container">
                    <Row>
                        {!recording.active && <Button
                            // variant={recording.active ? 'danger' : 'primary'}
                            className={recording.active ? "active" : null}
                            onClick={() => !recording.active && stream.recorder.start()}
                        >
                            Start Recording

                        </Button>}

                        {recording.active && <Button
                            variant={'danger'}
                            onClick={() => {
                                stream.recorder.stop();
                            }}>


                            {<Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />}
                            Stop Recording</Button>}
                    </Row>


                    {recording.available &&
                        <Row style={{marginTop: '2vh'}}>
                            <audio controls src={recording.url}/>

                        </Row>
                    }
                </div>
            ) : (
                <Row>
                    <Button onClick={getAccess}>Get Mic Access</Button>

                </Row>
            )}
        </Container>
    );


}

export default SendVoice;