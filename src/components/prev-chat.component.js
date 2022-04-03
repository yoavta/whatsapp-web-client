import React from "react";
import {Card, Container} from "react-bootstrap";

function PrevChat(props) {
    return (


        <Card id='prev-card'
              style={{ cursor: "pointer" ,marginBottom:"5px"}}
              onClick={()=>props.setCurrentChat(props.name)}>
            <Card.Header>{props.name}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        our last conversion....
                    </p>
            </blockquote>
                         <p className="time">
                        14:39
                    </p>
        </Card.Body>
</Card>


)


}


export default PrevChat;