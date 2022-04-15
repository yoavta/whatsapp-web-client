import React from "react";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import ServiceServer from "../server-service";
import "./prev-chat.style.css"

function PrevChat(props) {

    const massage = ServiceServer.getLastMessage(props.currentUser, props.name);
    return (


   <Card id='prev-card'
              style={props.style}
              onClick={() => props.setCurrentChat(props.name)}
        >

            <Container style={{padding:0}}>



            <Row id='row'>
                <Col  sm={4} md={4} lg={4} xl={4} xs={4}  >
                    <img
                         style={ {objectFit: 'cover', width:50,height: 50 , borderRadius:'50%'}}
                    src={props.picture}

                />
                </Col>
                <Col   >
                    <Card.Title style={{marginBottom: 0}}>
                        {ServiceServer.getUserNickname(props.name)}
                    </Card.Title>
                    {massage != null &&<Card.Text>
                        {massage.text}
                    </Card.Text>}
                </Col>


                <Col sm={2} md={2} lg={2} xl={2} xs={2} >
                    {massage != null && <p className="time">
                        {massage.date}
                    </p>}
                </Col>
            </Row>

            </Container>

        </Card>


    )


}


export default PrevChat;