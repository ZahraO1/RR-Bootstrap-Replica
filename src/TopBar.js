import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export default function TopBar(){
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand style={{margin: "5px 75em 0 20px", paddingRight:'40px'}} href="#home">
                <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" alt="instacart logo"/> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"> 
                </Nav>
                <Nav>
                    <Nav.Link href="#LogIn" style={{fontWeight:'bold',paddingLeft:"4em"}}>Log In</Nav.Link>
                    <Button variant="success">Sign Up</Button>{' '}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

