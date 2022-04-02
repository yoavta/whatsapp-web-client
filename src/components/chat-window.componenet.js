import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import React from "react";
import './side.nav.style.css';

import './chat-window.style.css';

function ChatWindow(props) {


    return (
        <Container id='all-frame' fluid style={{height: '100%'}}>
            <Tab.Container id="tabs" defaultActiveKey="first">
                <Row>

                    <Col>
                        <h1>chat with: {props.chatWith}</h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi consectetur dicta
                        dolores, et eum ex facere fuga iusto minima modi omnis pariatur, quia quidem voluptatem? Impedit
                        inventore nihil vero.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi consectetur dicta
                        dolores, et eum ex facere fuga iusto minima modi omnis pariatur, quia quidem voluptatem? Impedit
                        inventore nihil vero.

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi consectetur dicta
                        dolores, et eum ex facere fuga iusto minima modi omnis pariatur, quia quidem voluptatem? Impedit
                        inventore nihil vero.
                    </Col>

                </Row>
            </Tab.Container>
        </Container>);
}

export default ChatWindow;
