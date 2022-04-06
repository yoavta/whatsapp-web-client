import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import React, {useState} from "react";
import './side.nav.style.css';
import massage from '../components/massage'
import DisplayMsg from '../components/displayMsg'
import './chat-window.style.css';
import {Alert, Button, Card, Form} from "react-bootstrap";
import ServiceServer from "../server-service";
import SendingOptions from "./sendingOptions";
import PoppingScreen from "./popping-screen.component";



function ChatWindow(props) {

    // const massages = []
    const [msg, setMsg] = useState(null);
    const [change, setChange] = useState(null);
    const time = null;
    const [ctime, setDate] = useState(time);
    const [val, setVal] = useState("");


    function handleSubmit() {
        debugger

        ServiceServer.addMsg(msg, props.currentUser, props.chatWith);

        if (change) {
            setChange(false);
        } else setChange(true);
        setVal("");
        // setChange(false);

    }


    function handleNewMsg(event) {

        let text = event.target.value;

        // handelTime();
        let time = new Date().toLocaleTimeString();

        setDate(time);
        setVal(text);
        console.log(ctime);
        let msgtime = ctime;

        setMsg(new massage(text, true, msgtime,null,null));
    }


    return (
        <Container id='all-frame' fluid
                   style={{maxHeight: '450px', minHeight: '450px', width: '100%', overflowY: 'auto'}}>
            <Tab.Container id="tabs" defaultActiveKey="first">
                <Row>

                    <Col>
                        <PoppingScreen type ='video' setMsg={setMsg} handleSubmit={handleSubmit} currentUser={props.currentUser} chatWith={props.chatWith}/>
                        <PoppingScreen type ='image' setMsg={setMsg} handleSubmit={handleSubmit} currentUser={props.currentUser} chatWith={props.chatWith}/>
                        <PoppingScreen type ='voice' setMsg={setMsg} handleSubmit={handleSubmit} currentUser={props.currentUser} chatWith={props.chatWith}/>
                        <h1>chat with: {props.chatWith}</h1>
                        this is my text


                        {ServiceServer.getChats(props.currentUser, props.chatWith).map((massage, key) => {

                            if (massage.is_it_me) {
                                return (
                                    <DisplayMsg key={key} massage={massage}
                                                style={{position: 'relative', width: '40%'}}/>
                                )
                            } else {
                                return (
                                    <DisplayMsg key={key} massage={massage}
                                                style={{position: 'relative', width: '40%', left: '60%'}}/>
                                )
                            }
                        })}


                        {/* {massages.map((val, key) => {
                            console.log(val);
                            

                        })} */}

                    </Col>


                </Row>
                <Row>


                    <div className="input-group mb-3" style={{position: 'fixed', bottom: '7%', width: '53%'}}>
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon1"
                                onClick={(event) => {
                                    handleSubmit(event)
                                }}> Send
                        </button>
                        <input value={val} type="text" className="form-control" placeholder=""
                               aria-label="Example text with button addon" aria-describedby="button-addon1"
                               onChange={(event) => {
                                   handleNewMsg(event)
                               }}
                        />
                    </div>
                    <SendingOptions/>


                </Row>
            </Tab.Container>
        </Container>);
}

export default ChatWindow;
