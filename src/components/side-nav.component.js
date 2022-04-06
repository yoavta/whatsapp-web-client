import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import React from "react";
import './side.nav.style.css';
import PrevChat from "./prev-chat.component";
import Search from "./search.component";
import ServiceServer from "../server-service";
import {forEach} from "react-bootstrap/ElementChildren";


function SideNav(props) {

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
                 {ServiceServer.getUsersNames(props.currentUser).map(user =>{
                     if(subsetOf(user)){
                         return <PrevChat currentUser={props.currentUser} key={user} {...props} name={user} as={Nav.Link} setCurrentChat={setCurrentChat}>{user}</PrevChat>}
                 })}
            </Col>
        </Row>
    </Tab.Container>);
}

export default SideNav;
