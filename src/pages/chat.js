import React, {useState} from 'react';
import {Col, Container, Row,} from 'react-bootstrap';
import SideNav from "../components/side-nav.component";
import ChatWindow from "../components/chat-window.componenet";
import ServiceServer from "../server-service";



function Chat(props) {
    const chat1 = [ [1, '14:00', 'hey'], [2, '15:00', 'whatsup?'], [1,'15:30', 'ok']]
    const chats = [{participent1: 'yahel', participent2: 'yoav', chat: chat1}]



    const [chatWith, setChatWith] = useState('');
    const [searchFilter, setSearchFilter] = useState('');

    return (
        <div className="Chat">
            {/*<p>chat with: {chatWith}</p>*/}
            {/*<p>search: {searchFilter}</p>*/}
            <Container>
                <Row>
                    <Col sm={4}>
                        <SideNav  chatWith={chatWith} setChatWith={setChatWith} searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>
                    </Col>
                    <Col sm={8}>
                        <ChatWindow chatWith={chatWith} setChatWith={setChatWith}/>
                        
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Chat;