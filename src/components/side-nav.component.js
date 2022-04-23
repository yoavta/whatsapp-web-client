import {Col, Nav, Row, Tab} from "react-bootstrap";
import React, {useState} from "react";
import './side.nav.style.css';
import PrevChat from "./prev-chat.component";
import Search from "./search.component";
import ServiceServer from "../server-service";
import serverService from "../server-service";
import NewConversation from "./new-conversation";


function SideNav(props) {

    const [refresh, setRefresh] = useState(false);


    function setCurrentChat(name) {
        props.setChatWith(name);

    }

    function subsetOf(name) {
        if (!props.searchFilter) {
            return true;
        }
        if (!name) {
            return false;
        }
        return name.includes(props.searchFilter);
    }

    function handleRefresh() {
        // re-renders the component
        if (refresh) {
            setRefresh(false);

        } else setRefresh(true);
    }

    return (


        <Tab.Container id="tabs" defaultActiveKey="first">

            <Row style={{overflow: 'auto', maxHeight: '74vh', minHeight: '74vvh'}}>
                <Col>

                    <Search setSearchFilter={props.setSearchFilter} searchFilter={props.searchFilter}/>
                    <NewConversation refresh={handleRefresh} currentUser={props.currentUser}/>
                    {ServiceServer.getUsersNamesSortedByLastMassage(props.currentUser).map(user => {
                        if (subsetOf(serverService.getUserNickname(user))) {


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

            </Row>
        </Tab.Container>);
}

export default SideNav;
