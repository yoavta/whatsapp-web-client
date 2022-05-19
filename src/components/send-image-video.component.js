import {Col, Container, Form, Image, Row} from "react-bootstrap";
import React, {useState, useEffect} from "react";

function SendImageVideo(props) {

    let typeForAccept = props.type.concat("/*");


    useEffect(() => {

        props.mediaPrev != null && props.mediaChanged()
    }, [props.mediaPrev])

    return (<Container>
            <Form.Group className="mb-3" controlId="formImage">
                <Form.Label>Choose {props.type}</Form.Label>
                <Form.Control required type="file" accept={typeForAccept}
                              onChange={event => {

                                  const val = URL.createObjectURL(event.target.files[0]);
                                  props.setMediaPrev(val);


                                  // props.mediaChanged();
                              }}
                />
            </Form.Group>

            <Row className="justify-content-md-center">
                <Col md={"auto"}>
                    {props.type === 'image' && (props.mediaPrev != null) &&
                        <Image style={{width: "100px", height: "100px"}} className={"center-block"}
                               src={props.mediaPrev}/>}
                    {props.type === 'video' && (props.mediaPrev != null) &&
                        <video width="400" controls className={"center-block"} src={props.mediaPrev}/>}
                </Col>
            </Row>

        </Container>


    );


}

export default SendImageVideo;