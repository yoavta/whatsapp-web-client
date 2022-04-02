import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import React from "react";
import './side.nav.style.css';
import PrevChat from "./prev-chat.component";
import Search from "./search.component";
import ServiceServer from "../server-service";


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
                    {ServiceServer.getUsers(props.searchFilter).map((val) => {
                        if (subsetOf(val.user_name)) {
                            return <PrevChat key={val.user_name} {...props} name={val.user_name} as={Nav.Link}
                                             onClick={setCurrentChat}>{val.user_name}</PrevChat>}

                        })}

                    {/*<PrevChat {...props} name={'yahel'} as={Nav.Link} onClick={setCurrentChat}>'yahel</PrevChat>*/}
                    {/*<PrevChat {...props} name={'yaron'} as={Nav.Link} onClick={setCurrentChat}>yaron</PrevChat>*/}
                    {/*<PrevChat {...props} name={'yaya'} as={Nav.Link} onClick={setCurrentChat}>yaya</PrevChat>*/}
                </Col>
            </Row>
        </Tab.Container>);
}

export default SideNav;
