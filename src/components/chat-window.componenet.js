
import {Col, Container, Image, Nav, Row, Tab} from "react-bootstrap";
import React, {useState , useEffect} from "react";
import './side.nav.style.css';
import massage from '../components/massage'
import DisplayMsg from '../components/displayMsg'
import './chat-window.style.css';
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

        ServiceServer.addMsg(msg, props.currentUser, props.chatWith);

        if (change) {
            setChange(false);
        } else setChange(true);
        setVal("");
        setMsg(null)
        // setChange(false);

    }

  //   useEffect(() => {
  //   const listener = event => {
  //     if (event.code === "Enter" || event.code === "NumpadEnter") {
  //       console.log("Enter key was pressed. Run your function.");
  //       debugger
  //       handleSubmit();
  //       event.preventDefault();
  //
  //     }
  //   };
  //   document.addEventListener("keydown", listener);
  //   return () => {
  //     document.removeEventListener("keydown", listener);
  //   };
  // }, []);


    function handleNewMsg(event) {
        debugger
        let text = event.target.value;

        // handelTime();
        let time = new Date().toLocaleTimeString();

        setDate(time);
        setVal(text);
        console.log(ctime);
        let msgtime = ctime;

        setMsg(new massage(text, true, msgtime,"null","text"));
    }


    const handleEnter = (event) => {
        if (event.key === "Enter") {
            handleSubmit();
        }

    }
    return (
        <Container fluid>
            <Tab.Container id="tabs" defaultActiveKey="first">
                <Row id='all-frame' >

                    <Col>



                        {/*<h1 style={{top: '10%'}}>chat with: {props.chatWith}</h1>*/}
                        {/*this is my text*/}


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


                    </Col>


                </Row>
                <Row style={{width : '55vw'}}>


                    <div className="input-group mb-3" >
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon1"
                                onClick={(event) => {
                                    handleSubmit(event)
                                }}> Send
                        </button>
                        <input onKeyDown={handleEnter} value={val} type="text" className="form-control" placeholder=""
                               aria-label="Example text with button addon" aria-describedby="button-addon1"
                               onChange={(event) => {
                                   handleNewMsg(event)
                               }}
                        />
                        <PoppingScreen style={{position: "absolute"}} setMsg={setMsg} handleSubmit={handleSubmit} currentUser={props.currentUser} chatWith={props.chatWith}/>
                    </div>



                </Row>
            </Tab.Container>
        </Container>);
}

export default ChatWindow;
