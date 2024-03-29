import React, {useEffect, useState} from 'react';
import {Col, Container, Row,} from 'react-bootstrap';
import SideNav from "../components/side-nav.component";
import ChatWindow from "../components/chat-window.componenet";
import { HubConnectionBuilder } from '@microsoft/signalr';
import ServiceServer from "../server-service";


function Chat(props) {

    const [chatWith, setChatWith] = useState('');
    const [searchFilter, setSearchFilter] = useState('');
    const [refresh, setRefresh] = useState(Date.now());

        const [ connection, setConnection ] = useState(null);




      useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl(ServiceServer.baseUrl+ "hub")
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(() => {
                    connection.on('RenderPage', (userName) => {
                        if (userName !== ServiceServer.currentUser.userName){
                        console.log('chat changed')
                        setRefresh(Date.now())}
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }

    }, [connection]);


    function notifyAll(userName) {
        setRefresh(Date.now())
        if (userName){
            connection.invoke("ChangedAll", ServiceServer.currentUser.userName)
        }else {
            connection.invoke("ChangedAll", ServiceServer.currentUser.userName)
        }
    }

    return (
        <Container style={{overflow: 'hidden', boxSizing: 'border-box'}}>
            <Row className="justify-content-md-center">
                <Col sm={4} md={4} lg={4} xl={4} xs={4}>
                    <SideNav currentUser={props.currentUser} chatWith={chatWith} setChatWith={setChatWith}
                             searchFilter={searchFilter} setSearchFilter={setSearchFilter} render={notifyAll} refresh={refresh}/>
                </Col>
                <Col>
                    <ChatWindow notifyAll={notifyAll} refresh={refresh} chatWith={chatWith} currentUser={props.currentUser}/>
                </Col>
            </Row>
        </Container>

    );
}

export default Chat;