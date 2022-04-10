import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import React, {useState} from "react";
import './side.nav.style.css';
import PrevChat from "./prev-chat.component";
import Search from "./search.component";
import ServiceServer from "../server-service";

import {forEach} from "react-bootstrap/ElementChildren";
import users from "../assets/hard-coded-users";
import serverService from "../server-service";
import NewConversation from "./new-conversation";


function SideNav(props) {

    const [refresh, setRefresh] = useState(false);


    function setCurrentChat(name) {
        props.setChatWith(name);

    }

    function subsetOf(name) {
        return name.includes(props.searchFilter);
    }

    function handleRefresh() {
        // re-renders the component
        if(refresh){
            setRefresh(false);

        }else setRefresh(true);
    }

    return (<Tab.Container id="tabs" defaultActiveKey="first">
        <Row style={{overflow: 'auto', maxHeight: '450px', minHeight: '450px'}}>
            <Col>
                <Search setSearchFilter={props.setSearchFilter} searchFilter={props.searchFilter}/>

                {ServiceServer.getUsersNames(props.currentUser).map(user => {
                    if (subsetOf(user)) {

                        console.log(serverService.getUserUrl(user))
                        if (user === props.chatWith) {

                            return <PrevChat currentUser={props.currentUser}
                                             style={{cursor: 'pointer', backgroundColor: '#DCDCDC'}}
                                             key={user} {...props} name={user} as={Nav.Link}
                                             setCurrentChat={setCurrentChat}
                                             picture={serverService.getUserUrl(user)}>{user}</PrevChat>
                        } else return <PrevChat currentUser={props.currentUser} style={{cursor: 'pointer'}}
                                                key={user} {...props} name={user} as={Nav.Link}
                                                setCurrentChat={setCurrentChat}
                                                picture={serverService.getUserUrl(user)}>{user}</PrevChat>
                    }
                })}

            </Col>
            <NewConversation refresh= {handleRefresh} currentUser={props.currentUser}/>
        </Row>
    </Tab.Container>);
}

export default SideNav;
