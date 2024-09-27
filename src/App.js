import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RobotList from './components/RobotList';
import RobotDetail from './components/RobotDetail';
import Header from './components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import robot1 from './images/robot1.jpeg';
import robot2 from './images/robot2.jpeg';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [robots] = useState([
    {
      nombre: 'Robot1',
      modelo: 'R1000',
      fabricante: 'RobotCocina',
      imagen: robot1,
      anio: 2020,
      capacidad: '1.8 GHz',
      humor: 'Serio y servicial'
    },
    {
      nombre: 'Robot2',
      modelo: 'R2000',
      fabricante: 'RoboticoCorp',
      imagen: robot2,
      anio: 2018,
      capacidad: '1.6 GHz',
      humor: 'Alegre y jugueton'
    }
  ]);
  const [selectedRobot, setSelectedRobot] = useState(null);

  return (
    <div className="App">
      <Header />

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
