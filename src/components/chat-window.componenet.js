import {Dropdown, Button, Col, Container, DropdownButton, Form, InputGroup, Row, SplitButton} from "react-bootstrap";
import React, {useState} from "react";
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


    function handleSubmit() {

        ServiceServer.addMsg(msg, props.currentUser, props.chatWith);

        if (change) {
            setChange(false);
        } else setChange(true);
        setVal("");
        setMsg(null)

        const snd = new Audio('https://bigsoundbank.com/UPLOAD/wav/1313.wav');
        snd.play();

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
        let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        setDate(time);
        setVal(text);
        console.log(ctime);
        let msgtime = ctime;

        setMsg(new massage(text, true, msgtime, "null", "text"));
    }


    const handleEnter = (event) => {
        if (event.key === "Enter") {
            handleSubmit();
        }

    }
    return (
        <Container style={{margin:0}} >
            <Row id='all-frame' fluid>
                <Col style={{width:'100%'}}>
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
            <Row

                //             style={{   display: 'flex',
                // flexDirection: 'column',
                // alignItems: 'center',
                // justifyContent: 'space-between'}}
            >

                  <InputGroup size="sm" className="mb-3" style={{padding:0}}>
                         <Button type="submit"
                                onClick={(event) => {
                                    handleSubmit(event)
                                }}> Send
                        </Button>

                        <Form.Control
                            onKeyDown={handleEnter} value={val} type="text" className="form-control1"
                            placeholder=""
                            onChange={(event) => {
                                handleNewMsg(event)
                            }}
                        />
 {/*<DropdownButton*/}
 {/*    key={"up"}*/}
 {/*            drop={"up"}*/}
 {/*     variant="outline-secondary"*/}
 {/*     title="Dropdown"*/}
 {/*       id={`dropdown-button-drop-up`}*/}
 {/*            style={{position:'absolute'}}*/}
 {/*          align={{ lg: 'end' }}*/}

 {/*   >*/}
 {/*     <Dropdown.Item href="#">Action</Dropdown.Item>*/}
 {/*     <Dropdown.Item href="#">Another action</Dropdown.Item>*/}
 {/*     <Dropdown.Item href="#">Something else here</Dropdown.Item>*/}
 {/*     <Dropdown.Divider />*/}
 {/*     <Dropdown.Item href="#">Separated link</Dropdown.Item>*/}
 {/*   </DropdownButton>*/}



    {/*<InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>*/}
    {/*<Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" />*/}

                                      <PoppingScreen style={{position: "absolute"}} setMsg={setMsg} handleSubmit={handleSubmit}
                                          currentUser={props.currentUser} chatWith={props.chatWith}/>
  </InputGroup>










                {/*<Form.Group controlId="formFile" className="mb-3">*/}
                {/*<Button type="submit"*/}
                {/*                   onClick={(event) => {*/}
                {/*                       handleSubmit(event)*/}
                {/*                   }}> Send*/}
                {/*           </Button>*/}


                                  {/*<Form.Control  style={{display: 'flex'}} onKeyDown={handleEnter} value={val} type="text" className="form-control"*/}
                                  {/*               placeholder=""*/}
                                  {/*               onChange={(event) => {*/}
                                  {/*                   handleNewMsg(event)*/}
                                  {/*               }}*/}
                                  {/* />*/}

                {/*   <PoppingScreen style={{position: "absolute"}} setMsg={setMsg} handleSubmit={handleSubmit}*/}
                {/*                          currentUser={props.currentUser} chatWith={props.chatWith}/>*/}


                {/*</Form.Group>*/}

            </Row>
            {/*</Tab.Container>*/}
        </Container>
    );
}

export default ChatWindow;
