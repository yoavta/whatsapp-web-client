import ServiceServer from '../server-service';

import React, {useEffect, useState} from "react";
import {Alert, Button, Card, Container, Dropdown} from "react-bootstrap";


function imgClick() {
    console.log("f")
}

function sendingOption() {
    return (

        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"><img onClick={imgClick} src={require('./pictureImg.png')} width={"20px"} height={"20px"} /></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><img onClick={imgClick} src={require('./videoIcon.png')} width={"20px"} height={"20px"} /></Dropdown.Item>
                <Dropdown.Item href="#/action-3"><img onClick={imgClick} src={require('./micIcon.png')} width={"20px"} height={"20px"} /></Dropdown.Item>
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