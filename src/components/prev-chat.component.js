import React, {useState} from "react";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import ServiceServer from "../server-service";
import "./prev-chat.style.css"

function PrevChat(props) {


    function datePipe(date){
        return date.slice(-8).slice(0,5);
    }
    return (


   <Card id='prev-card'
              style={props.style}
              onClick={() => props.setCurrentChat(props.user['id'])}
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
                        {props.user['name']}
                    </Card.Title>
                    {props.user['last'] != null &&<Card.Text>
                        {props.user['last']}
                    </Card.Text>}
                </Col>


                <Col sm={2} md={2} lg={2} xl={2} xs={2} >
                    {props.user['lastdate'] != null && <p className="time">
                        {datePipe(props.user['lastdate'])}
                    </p>}
                </Col>
            </Row>

            </Container>

        </Card>


    )


}


export default PrevChat;