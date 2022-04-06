import { Button } from 'bootstrap';
import massage from '../components/massage'

function DisplayMsg({massage, style}) {

    return (   
        
        <div className="card" style={style}>
            <div className="card-body" style={{position: 'relative', textAlign: 'left'}}>
                
                <h6 className="card-subtitle mb-2 text-muted" >{massage.date}</h6>
                <p className="card-text" >{massage.text}</p>
             
            </div>
        </div>
    );
} export default DisplayMsg;