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
    const time = null;
    const [ctime, setDate] = useState(time);
    const [val, setVal] = useState("");

    const [chats, setChats] = useState([]);

    const [counter, changeCounter] = useState(1);
    useEffect(() => {
        if(props.chatWith){
        ServiceServer.getChat(props.chatWith).then(fetchedChats  => setChats(fetchedChats));
        console.log('fetching messages')
        }
    },[props.chatWith,props.refresh])


    function handleSubmit() {
        ServiceServer.addMsg(msg, props.currentUser, props.chatWith).then(()=>{
            changeCounter(counter + 1);
            props.render();
        })
        setVal("");
        setMsg(null)
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
                    {chats.map((message, key) => {
                        if (message.sender === props.chatWith) {
                            return (
                                <DisplayMsg key={key} message={message} chatWith={props.chatWith}
                                            style={{position: 'relative', width: '40%'}}/>
                            )
                        } else {
                            return (
                                <DisplayMsg key={key} message={message} chatWith={props.chatWith}
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
