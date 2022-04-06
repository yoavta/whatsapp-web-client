import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import React, {useState} from "react";
import './side.nav.style.css';
import massage from '../components/massage'
import DisplayMsg from '../components/displayMsg'
import './chat-window.style.css';
import {Alert, Button, Card, Form} from "react-bootstrap";
import ServiceServer from "../server-service";


function ChatWindow(props) {

    // const massages = []
    const [msg, setMsg] = useState(null);
    const [change, setChange] = useState(null);
    const time = null;
    const [ctime, setDate] = useState(time);
    const [val, setVal] = useState("");


    function handleSubmit(event) {
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

        setMsg(new massage(text, true, msgtime));
    }


    return (
        <Container id='all-frame' fluid
                   style={{maxHeight: '600px', minHeight: '650px', width: '120%', overflowY: 'auto'}}>
            <Tab.Container id="tabs" defaultActiveKey="first">
                <Row>

                    <Col>
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


                </Row>
            </Tab.Container>
        </Container>);
}

export default ChatWindow;
