import { Button } from 'bootstrap';
import massage from '../components/massage'
import {Image} from "react-bootstrap";
import React from "react";

function DisplayMsg({massage, style}) {

    return (   
        
        <div className="card" style={style}>
            <div className="card-body" style={{position: 'relative', textAlign: 'left'}}>

                <h6 className="card-subtitle mb-2 text-muted" >{massage.date}</h6>
                {massage.media_type == "text" && <p className="card-text" >{massage.text}</p>}
                {massage.media_type == "image" && <Image style={{maxHeight: '50px', maxWidth: '50px'}} className={"center-block"} src={massage.media}/>}
                {massage.media_type == "video" && <video width="400" controls className={"center-block"} src={massage.media_type}/>}
            </div>
        </div>
    );
} export default DisplayMsg;