import {Col, Container, Form, Image, Row} from "react-bootstrap";
import React, {useState} from "react";
import ServiceServer from "../server-service";

function SendImageVideo(props) {


    return (<Container>
            <Form.Group className="mb-3" controlId="formImage">
                <Form.Label>Choose Image</Form.Label>
                <Form.Control required type="file" accept="image/*"
                              onChange={event => {
                                  debugger
                                  event.preventDefault();
                                  event.stopPropagation();
                                  let val = URL.createObjectURL(event.target.files[0]);
                                  props.setMediaPrev(val)
                                  props.mediaChanged()
                              }}
                />
            </Form.Group>

            <Row className="justify-content-md-center">
                <Col md={"auto"}>
                    {props.type === 'image' && (props.mediaPrev != null) &&
                        <Image className={"center-block"} src={props.mediaPrev}/>}
                    {props.type === 'video' && (props.mediaPrev != null) &&
                        <video width="400" controls className={"center-block"} src={props.mediaPrev}/>}
                </Col>
            </Row>

        </Container>


    );


}

export default SendImageVideo;