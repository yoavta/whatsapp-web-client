import ServiceServer from '../server-service';

import React, {useEffect, useState} from "react";
import {Alert, Button, Card, Container, Dropdown} from "react-bootstrap";
import massage from "./massage";
import PoppingScreen from "./popping-screen.component";


function sendingOption(props) {






    function imgClick() {
        debugger
        return(
            <PoppingScreen type='image' setMsg={props.setMsg} handleSubmit={props.handleSubmit} currentUser={props.currentUser}
                           chatWith={props.chatWith}/>
            )

    }

    function videoClick() {
        return (
            <PoppingScreen type='video' setMsg={props.setMsg} handleSubmit={props.handleSubmit} currentUser={props.currentUser}
                           chatWith={props.chatWith}/>
        )
    }

    function micClicke() {
        return(
            <PoppingScreen type='voice' setMsg={props.setMsg} handleSubmit={props.handleSubmit} currentUser={props.currentUser}
                           chatWith={props.chatWith}/>
        )
    }

    return (

        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img onClick={imgClick} src={require('./paper-clipIcon.png')} width={"20px"} height={"20px"}/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"><img onClick={imgClick} src={require('./pictureImg.png')}
                                                      width={"20px"} height={"20px"}/></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><img onClick={imgClick} src={require('./videoIcon.png')} width={"20px"}
                                                      height={"20px"}/></Dropdown.Item>
                <Dropdown.Item href="#/action-3"><img onClick={imgClick} src={require('./micIcon.png')} width={"20px"}
                                                      height={"20px"}/></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        // <div className="card" style={{width: "15%", height: "10vh" }}>
        //     <Col>
        //         <img onClick={imgClick} style={{position: 'absolute', left: '10%', top: '30%'}} src={require('./pictureImg.png')} width={"20px"} height={"20px"} />
        //     </Col>
        //     <Col>
        //         <img onClick={imgClick} style={{position: 'absolute', left: '40%' ,  bottom: '30%'}} src={require('./videoIcon.png')} width={"20px"} height={"20px"} />
        //     </Col>
        //     <Col>
        //         <img onClick={imgClick} style={{position: 'absolute', left: '70%' ,  bottom: '30%'}} src={require('./micIcon.png')} width={"20px"} height={"20px"} />
        //     </Col>
        //
        // </div>

    )
}

export default sendingOption;