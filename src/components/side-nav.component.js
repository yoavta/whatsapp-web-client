import {Col, Nav, Row, Tab} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import './side.nav.style.css';
import PrevChat from "./prev-chat.component";
import Search from "./search.component";
import ServiceServer from "../server-service";
import serverService from "../server-service";
import NewConversation from "./new-conversation";
import {f} from "../assets/React App_files/bundle";


function SideNav(props) {

    const [refresh, setRefresh] = useState(false);
    const [massagesWith, setMassagesWith] = useState([]);
    const [contacts, setContacts] = useState([]);

    useEffect(   () => {
         ServiceServer.getUsers().then(data => setMassagesWith(data)
        )
    },[])

       useEffect(() => {
     ServiceServer.getContacts().then(data=> setContacts(data)
        )},[])

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

    function inContacts(userName) {
        if (!contacts || !massagesWith)
            return false;
        else if (contacts.find(contact=> contact['id'] === userName)){
                return true;
            }
        return false;
    }

    return (


        <Tab.Container id="tabs" defaultActiveKey="first">


            <Row style={{overflow: 'auto', maxHeight: '74vh', minHeight: '74vvh'}}>
                <Col>
                    <Search setSearchFilter={props.setSearchFilter} searchFilter={props.searchFilter}/>
                    <NewConversation refresh={handleRefresh} currentUser={props.currentUser}/>
                    {massagesWith.map(user => {
                        if (subsetOf(contacts['name']) && inContacts(user.userName)) {
                            const contact = contacts.find(contact=>contact['id']===user.userName)
                            if (user.userName === props.chatWith) {
                                return <PrevChat currentUser={props.currentUser}
                                                 style={{cursor: 'pointer', backgroundColor: '#DCDCDC'}}
                                                 key={user.userName} {...props} user={contact} as={Nav.Link}
                                                 setCurrentChat={setCurrentChat}
                                                 picture={user.pictureUrl}>{user.userName}</PrevChat>
                            } else{

                                return <PrevChat currentUser={props.currentUser} style={{cursor: 'pointer'}}
                                                    key={user.userName} {...props} user={contact} as={Nav.Link}
                                                    setCurrentChat={setCurrentChat}
                                                    picture={user.pictureUrl}>{user.userName}</PrevChat>
                        }}
                    })}

                </Col>

            </Row>
        </Tab.Container>);
}

export default SideNav;
