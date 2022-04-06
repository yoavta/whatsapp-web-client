import React, {useState} from 'react';
import {Col, Container, Row,} from 'react-bootstrap';
import SideNav from "../components/side-nav.component";
import ChatWindow from "../components/chat-window.componenet";
import ServiceServer from "../server-service";



function Chat(props) {


    const [chatWith, setChatWith] = useState('');
    const [searchFilter, setSearchFilter] = useState('');

    return (
        <div className="Chat">
            {/*<p>chat with: {chatWith}</p>*/}
            {/*<p>search: {searchFilter}</p>*/}
            <Container>
                <Row >
                    <Col sm={4} >
                        <SideNav  currentUser={props.currentUser} chatWith={chatWith} setChatWith={setChatWith} searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>
                    </Col>
                    <Col sm={8}>
                        <ChatWindow chatWith={chatWith} currentUser={props.currentUser}/>
                        
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Chat;