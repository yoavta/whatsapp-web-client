import {Col, Container, Form, Image, Row} from "react-bootstrap";
import React, {useState} from "react";
import ServiceServer from "../server-service";

function SendImage(props) {


    return (<Container>
            <Form.Group className="mb-3" controlId="formImage">
                <Form.Label>Choose Image</Form.Label>
                <Form.Control required type="file"
                              onChange={event => {
                                  props.setMediaPrev(URL.createObjectURL(event.target.files[0]))
                                  props.mediaChanged()
                              }}
                />
            </Form.Group>

            <Row className="justify-content-md-center">
                <Col md={"auto"}>
                    {(props.mediaPrev != null) && <Image className={"center-block"} src={props.mediaPrev}/>}
                    {(props.mediaPrev != null) && <video width="400" controls className={"center-block"} src={props.mediaPrev}/>}
                </Col>
            </Row>

        </Container>


    );


}

export default SendImage;