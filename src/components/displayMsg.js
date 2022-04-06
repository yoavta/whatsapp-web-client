import { Button } from 'bootstrap';
import massage from '../components/massage'
import {Image} from "react-bootstrap";
import React from "react";
import ServiceServer from "../server-service";

function DisplayMsg({massage, style}) {
    if (massage.mediaType==='image'){
       const  chats = ServiceServer.getUsers('yoav')
            debugger;
    }
    return (   
        
        <div className="card" style={style}>
            <div className="card-body" style={{position: 'relative', textAlign: 'left'}}>
                
                <h6 className="card-subtitle mb-2 text-muted" >{massage.date}</h6>

                    {massage.type ==='image'&& <Image className={"center-block"} src={massage.media}/>}
                    {massage.type ==='video' && <video width="400" controls className={"center-block"} src={massage.media}/>}
                <p className="card-text" >{massage.text}</p>
             
            </div>
        </div>
    );
} export default DisplayMsg;