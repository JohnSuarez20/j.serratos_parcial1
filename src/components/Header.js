import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar, Container } from 'react-bootstrap';
import robotsImage from '../images/robots.jpg';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand href="#home" className="text-center">
          <h2>{t('robot_adoption')}</h2>
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
