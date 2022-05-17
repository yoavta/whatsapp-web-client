import {Dropdown, Button, Col, Container, DropdownButton, Form, InputGroup, Row, SplitButton} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import './side.nav.style.css';
import massage from '../components/massage'
import DisplayMsg from '../components/displayMsg'
import './chat-window.style.css';
import ServiceServer from "../server-service";
import PoppingScreen from "./popping-screen.component";


function ChatWindow(props) {

    // const massages = []
    const [msg, setMsg] = useState(null);
    const [change, setChange] = useState(null);
    const time = null;
    const [ctime, setDate] = useState(time);
    const [val, setVal] = useState("");


    const [chats, setChats] = useState([]);

    useEffect(() => {
        if(props.chatWith){
        ServiceServer.getChat(props.chatWith).then(fetchedChats  => setChats(fetchedChats))
        }
    },[props.chatWith])


    function handleSubmit() {

        ServiceServer.addMsg(msg, props.currentUser, props.chatWith);

        if (change) {
            setChange(false);
        } else setChange(true);
        setVal("");
        setMsg(null)
        props.render();
        const snd = new Audio('https://bigsoundbank.com/UPLOAD/wav/1313.wav');
        snd.play();

    }


    function handleNewMsg(event) {

        let text = event.target.value;

        // handelTime();
        let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});

        setDate(time);
        setVal(text);

        let msgtime = ctime;

        setMsg(new massage(text, true, msgtime, "null", "text"));
    }


    const handleEnterKey = (event) => {
        if (event.key === "Enter") {
            handleSubmit();
        }

    }
    return (
        <Container style={{margin: 0}}>
            <Row id='all-frame' fluid="true">
                <Col style={{width: '100%'}}>
                    {chats.map((massage, key) => {
                        if (massage.is_it_me) {
                            return (
                                <DisplayMsg key={key} partMessage={massage} chatWith={props.chatWith}
                                            style={{position: 'relative', width: '40%'}}/>
                            )
                        } else {
                            return (
                                <DisplayMsg key={key} partMessage={massage} chatWith={props.chatWith}
                                            style={{position: 'relative', width: '40%', left: '60%'}}/>
                            )
                        }
                    })}
                </Col>
            </Row>
            <Row


            >

                <InputGroup size="sm" className="mb-3" style={{padding: 0}}>
                    <Button type="submit"
                            onClick={(event) => {
                                handleSubmit(event)
                            }}> Send
                    </Button>

                    <Form.Control
                        onKeyDown={handleEnterKey} value={val} type="text" className="form-control1"
                        placeholder=""
                        onChange={(event) => {
                            handleNewMsg(event)
                        }}
                    />


                    <PoppingScreen style={{position: "absolute"}} setMsg={setMsg} handleSubmit={handleSubmit}
                                   currentUser={props.currentUser} chatWith={props.chatWith}/>
                </InputGroup>


            </Row>

        </Container>
    );
}

export default ChatWindow;
