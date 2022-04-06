import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import React, {useState} from "react";
import ServiceServer from "../server-service";

function SendVoice(props) {


    function record() {
        const p = navigator.mediaDevices.getUserMedia({audio: true});
        p.then(function (mediaStream) {
            var audio = document.querySelector('audio');
            audio.src = window.URL.createObjectURL(mediaStream);
            audio.onloadedmetadata = function (e) {
                audio.play();
            };
        });
    }

    return (<Container>
            <Button onClick={record()}>Record</Button>
            {/*<Form.Group className="mb-3" controlId="formImage">*/}
            {/*    <Form.Label>Choose Image</Form.Label>*/}
            {/*    <input type="file" accept="audio/*" capture />*/}

            {/*    <Form.Control required type="file"*/}
            {/*                  onChange={event => {*/}
            {/*                      props.setMediaPrev(URL.createObjectURL(event.target.files[0]))*/}
            {/*                      props.mediaChanged()*/}
            {/*                  }}*/}
            {/*    />*/}
            {/*</Form.Group>*/}

            <Row className="justify-content-md-center">
                <Col md={"auto"}>
                    {/*{props.type ==='image'&&(props.mediaPrev != null) && <Image className={"center-block"} src={props.mediaPrev}/>}*/}
                    {/*{props.type ==='video'&&(props.mediaPrev != null) && <video width="400" controls className={"center-block"} src={props.mediaPrev}/>}*/}
                </Col>
            </Row>

        </Container>


    );


}

export default SendVoice;