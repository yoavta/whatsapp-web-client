import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import React , {useState} from "react";
import './side.nav.style.css';
import PrevChat from "./prev-chat.component";
import Search from "./search.component";
import ServiceServer from "../server-service";
import {forEach} from "react-bootstrap/ElementChildren";



function SideNav(props) {
    // const [temp, setTemp] = useState(null);
    function setCurrentChat(name) {
        props.setChatWith(name);

    }

    function subsetOf(name) {
        return name.includes(props.searchFilter);
    }


    return (<Tab.Container id="tabs" defaultActiveKey="first">
        <Row>
            <Col>
                <Search setSearchFilter={props.setSearchFilter} searchFilter={props.searchFilter}/>
                {ServiceServer.getUsersNames(props.currentUser).map(user => {
                    if (subsetOf(user)) {
                        console.log(user)
                        if (user === props.chatWith) {
                            debugger
                            return <PrevChat currentUser={props.currentUser}
                                             style={{cursor: 'pointer' ,backgroundColor: '#DCDCDC'}}
                                             key={user} {...props} name={user} as={Nav.Link}
                                             setCurrentChat={setCurrentChat}>{user}</PrevChat>
                        } else return <PrevChat currentUser={props.currentUser} style={{cursor: 'pointer'}}
                                                key={user} {...props} name={user} as={Nav.Link}
                                                setCurrentChat={setCurrentChat}>{user}</PrevChat>
                    }
                })}

            </Col>
        </Row>
    </Tab.Container>);
}

export default SideNav;
