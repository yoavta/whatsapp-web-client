import Welcome from "../components/welcome.component";
import {Col, Container} from "react-bootstrap";

function Home() {
    return (
      <div className="Home">
          <h1>
              Home screen!!!!
          </h1>
          <br/>
          <br/>
          <br/>
          <br/>
          <Col>
                                      <Welcome/>

          </Col>
      </div>
    );
  }

  export default Home;