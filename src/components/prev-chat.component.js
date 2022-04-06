import React from "react";
import {Card, Col, Image, Row} from "react-bootstrap";
import ServiceServer from "../server-service";

function PrevChat(props) {

    const massage = ServiceServer.getLastMessage(props.currentUser, props.name);
    return (


        <Card id='prev-card'
              style={{cursor: "pointer"}}
              onClick={() => props.setCurrentChat(props.name)}
        >

            <Row>
                <Col xs={6} md={4}  >
                    <Image className="rounded-circle"
                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/240px-Smiley_icon.svg.png'}
                    width="40"
                    height="40"
                />
                </Col>
                <Col xs={6} md={4}>
                    <Card.Title style={{marginBottom: 0}}>
                        {props.name}
                    </Card.Title>
                    <Card.Text>
                        {massage.text}
                    </Card.Text>
                </Col>


                <Col xs={6} md={4}>
                    <p className="time">
                        {massage.date}
                    </p>
                </Col>
            </Row>


        </Card>


    )


}


export default PrevChat;