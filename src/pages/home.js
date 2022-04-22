import Welcome from "../components/welcome.component";
import {Col, Container} from "react-bootstrap";

function Home() {
    return (
      <div className="Home">
          <h1 className={"big"}>
              Welcome
          </h1>
          <br/>

               <h1 className={"small"}>to our Chat application!!!
          </h1>

          <br/>
          <br/>
          <Col>
                                      <Welcome/>

          </Col>
      </div>
    );
  }

  export default Home;