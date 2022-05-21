import {Col, Nav, Row, Tab} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import './side.nav.style.css';
import PrevChat from "./prev-chat.component";
import Search from "./search.component";
import ServiceServer from "../server-service";
import NewConversation from "./new-conversation";


function SideNav(props) {

    const [users, setUsers] = useState([]);
    const [contacts, setContacts] = useState([]);

    useEffect(   () => {
         ServiceServer.getUsers().then(data => setUsers(data)
        )
    },[props.refresh])

       useEffect(() => {
     ServiceServer.getContacts().then(data=> setContacts(data)
        )},[props.refresh])

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

    // function handleRefresh() {
    //     setRefresh(refresh +1 );
    // }

    // function inContacts(userName) {
    //     if (!contacts || !users)
    //         return false;
    //     else if (contacts.find(contact=> contact['id'] === userName)){
    //             return true;
    //         }
    //     return false;
    // }
    function uniqKey(text) {
        let res = "";
        for (let i =0; i< text.length; i++) {
            res = res + text.charCodeAt(i)
        }
        return res;
    }


    return (


        <Tab.Container id="tabs" defaultActiveKey="first">


            <Row style={{overflow: 'auto', maxHeight: '74vh', minHeight: '74vvh'}}>
                <Col>
                    <Search setSearchFilter={props.setSearchFilter} searchFilter={props.searchFilter}/>
                    <NewConversation refresh={props.render} currentUser={props.currentUser}/>
                    {contacts.map(( contact,idx) => {
                        const user = users.find(user=>user.userName === contact.id);
                        if (!user){
                            return <div/>;
                        }
                        if (subsetOf(contact.name)) {
                            if (contact.id === props.chatWith) {
                                return <PrevChat currentUser={props.currentUser}
                                                 style={{cursor: 'pointer', backgroundColor: '#DCDCDC'}}
                                                 key={"s"+idx} {...props} user={contact} as={Nav.Link}
                                                 setCurrentChat={setCurrentChat}
                                                 picture={user.pictureUrl}>{user.userName}</PrevChat>
                            } else{

                                return <PrevChat currentUser={props.currentUser} style={{cursor: 'pointer'}}
                                                    key={"s"+idx} {...props} user={contact} as={Nav.Link}
                                                    setCurrentChat={setCurrentChat}
                                                    picture={user.pictureUrl}>{user.userName}</PrevChat>
                        }}return<div/>
                    })}

                </Col>

            </Row>
        </Tab.Container>);
}

export default SideNav;
