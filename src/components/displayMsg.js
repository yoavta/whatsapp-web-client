import { Button } from 'bootstrap';
import massage from '../components/massage'
import {Image} from "react-bootstrap";
import React from "react";
import ServiceServer from "../server-service";


function DisplayMsg({massage, style}) {
    if (massage.mediaType==='image'){
       const  chats = ServiceServer.getUsers('yoav')
    }
    return (   
        
        <div className="card" style={style}>
            <div className="card-body" style={{position: 'relative', textAlign: 'left'}}>

                <h6 className="card-subtitle mb-2 text-muted" >{massage.date}</h6>

                {massage.mediaType == "text" && <p className="card-text" >{massage.text}</p>}
                {massage.mediaType == "image" && <Image style={{maxHeight: '100px', maxWidth: '100px'}} className={"center-block"} src={massage.media}/>}
                {massage.mediaType == "video" && <video style={{maxHeight: '200px', maxWidth: '200px'}} controls className={"center-block"} src={massage.media}/>}
            </div>
        </div>
    );
} export default DisplayMsg;