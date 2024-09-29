import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import RobotList from './components/RobotList';
import RobotDetail from './components/RobotDetail';
import Header from './components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null);
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetch('http://localhost:3001/robots')
        .then(response => response.json())
        .then(data => setRobots(data))
        .catch(err => console.error('Error fetching robots:', err));
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Header />
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage('en')}>English</button>
      <Container>
        {!isLoggedIn ? (
          <LoginForm onLogin={setIsLoggedIn} />
        ) : (
          <Row className="mt-4">
            <Col md={8}>
              <RobotList robots={robots} onSelectRobot={setSelectedRobot} />
            </Col>
            <Col md={4}>
              <RobotDetail robot={selectedRobot} />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default App;
