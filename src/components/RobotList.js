import React from 'react';
import { Table } from 'react-bootstrap';

const RobotList = ({ robots, onSelectRobot }) => {
  return (
    <div className="container">
      <h2>Robots Disponibles para Adopción</h2>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Modelo</th>
            <th>Fabricante</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot, index) => (
            <tr key={index} onClick={() => onSelectRobot(robot)} style={{ cursor: 'pointer' }}>
              <td>{robot.nombre}</td>
              <td>{robot.modelo}</td>
              <td>{robot.fabricante}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RobotList;
