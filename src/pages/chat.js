import React, {useState} from 'react';
import {Col, Container, Row,} from 'react-bootstrap';
import SideNav from "../components/side-nav.component";
import ChatWindow from "../components/chat-window.componenet";


function Chat(props) {


    const [chatWith, setChatWith] = useState('');
    const [searchFilter, setSearchFilter] = useState('');

    return (
        <Container style={{position:'absolute', overflow:'hidden',boxSizing: 'border-box'}}  >
            <Row className="justify-content-md-center" >
                <Col sm={4} md={4} lg={4} xl={4} xs={4} >
                    <SideNav currentUser={props.currentUser} chatWith={chatWith} setChatWith={setChatWith}
                             searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>
                </Col>
                <Col >
                    <ChatWindow chatWith={chatWith} currentUser={props.currentUser}/>
                </Col>
            </Row>
        </Container>

    );
}

export default Chat;