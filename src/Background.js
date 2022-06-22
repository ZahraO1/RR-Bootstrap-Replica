import Container from "react-bootstrap/Container"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

export default function Background(){
    return(
        <div style={{backgroundColor:'#deedd6', height: '20em'}}>
            <Container>
                <Row>
                    <Col xs={11} style={{paddingTop:'7.5em',paddingRight:'40em'}}>
                        <h1 style={{textAlign:'left'}}>Order groceries for delivery or pickup today</h1>
                        <p style={{textAlign:'left'}}>Whatever you want from local stores, brought right to your door</p>
                    </Col>
                    <Col xs={1}>
                        <Image 
                            src='https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg'
                            style={{height:'20em', paddingLeft:'9em'}}/> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}