import React from "react";
import {Card, Col, Image, Row} from "react-bootstrap";
import ServiceServer from "../server-service";
import "./prev-chat.style.css"

function PrevChat(props) {

    const massage = ServiceServer.getLastMessage(props.currentUser, props.name);
    return (


        <Card id='prev-card'
              style={props.style}
              onClick={() => props.setCurrentChat(props.name)}
        >

            <Row id='row'>
                <Col xs={6} md={4} id='col' >
                    <Image className="rounded-circle"
                    src={props.picture}
                    width="60%"
                    height="90%"
                    style={{margin: 'auto'}}
                />
                </Col>
                <Col xs={6} md={4}  >
                    <Card.Title style={{marginBottom: 0}}>
                        {props.name}
                    </Card.Title>
                    {massage != null &&<Card.Text>
                        {massage.text}
                    </Card.Text>}
                </Col>


                <Col xs={6} md={4}  >
                    {massage != null && <p className="time">
                        {massage.date}
                    </p>}
                </Col>
            </Row>


        </Card>


    )


}


export default PrevChat;