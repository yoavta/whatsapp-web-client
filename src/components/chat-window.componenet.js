import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import React, { useState } from "react";
import './side.nav.style.css';
import massage from '../components/massage'
import DisplayMsg from '../components/displayMsg'
import './chat-window.style.css';
import { Alert, Button, Card, Form } from "react-bootstrap";


function ChatWindow(props) {

    const massages = []
    const [msg, setMsg] = useState(null);


    function temp() {
        massages.push(new massage('hello', true, '14:00'));
        massages.push(new massage('hi', false, '14:15'));
        massages.push(new massage('whats up', true, '14:30'));

    }



    function handleSubmit(event) {
        debugger
        event.preventDefault();
        event.stopPropagation();
        massages.push(msg);
        

    }

    function handleNewMsg(event) {
        event.preventDefault();
        event.stopPropagation();
        let text = event.target.value;
        let time = event.time;

        setMsg(new massage(text, true, time));
    }





    return (
        <Container id='all-frame' fluid style={{ height: '100%' }}>
            <Tab.Container id="tabs" defaultActiveKey="first">
                <Row>

                    <Col>
                        <h1>chat with: {props.chatWith}</h1>
                        this is my text
                        {temp()}

                        {massages.map((val, key) => {
                            console.log(val);
                            if (val.isItMe == true) {
                                return (
                                    <DisplayMsg key={key} massage={val} style={{ position: 'relative', width: '40%' }} />
                                )
                            } else {
                                return (
                                    <DisplayMsg key={key} massage={val} style={{ position: 'relative', width: '40%', left: '60%' }} />
                                )
                            }

                        })}

                    </Col>



                </Row>
                <Row>


                    <div className="input-group mb-3" style={{ position: 'absolute', bottom: '10%', width: '55%' }}>
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon1" onClick={(event) => {handleSubmit(event) }} > Button</button>
                        <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"
                            onChange={(event) => { handleNewMsg(event) }}
                        />
                    </div>


                </Row>
            </Tab.Container>
        </Container>);
}

export default ChatWindow;
