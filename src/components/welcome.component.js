import {Container, Carousel, Card, Row, Col} from "react-bootstrap";
import './welcome.style.css';

function Welcome(props) {
    return (<Container>
        <Row>

            <Col>

                <Card className='main' style={{
                    display: "inline-block",
                    minWidth: '40%',padding:20,maxWidth:'60%'}}>
                    <h1>
                    </h1>

                    <h2>
                        Made by Yahel Jacoby and Yoav Tamir.
                    </h2>

                    Feel free to sign in to your account and enjoy chatting with your friends.
                    <br/>
                    If you still dont have an account you can register in the registration page.

                </Card>


            </Col>

        </Row>

    </Container>)
}

export default Welcome;