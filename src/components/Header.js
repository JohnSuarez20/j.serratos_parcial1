import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import robotsImage from '../images/robots.jpg';

const Header = () => {
return (
    <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-center">
            <Navbar.Brand href="#home" className="text-center">
                <h2>Adopción de Robots</h2>
                <div>
                    <img 
                        src={robotsImage} 
                        alt="robots" 
                        className="img-fluid"
                    />
                </div>
            </Navbar.Brand>
        </Container>
    </Navbar>
);
};

export default Header;
