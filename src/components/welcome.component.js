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
                        Welcome!!
                    </h1>

                    <h2>
                        blablablablal blablablabla blablala !
                    </h2>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugit minus quos reiciendis! Culpa
                    natus necessitatibus obcaecati quis vitae! Atque dolorem eaque fuga fugiat pariatur quasi quisquam
                    quos
                    unde? Facilis.
                </Card>


            </Col>

        </Row>

    </Container>)
}

export default Welcome;