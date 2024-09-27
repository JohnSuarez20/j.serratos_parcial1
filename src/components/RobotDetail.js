import React from 'react';
import { Card } from 'react-bootstrap';

const RobotDetail = ({ robot }) => {
  if (!robot) {
    return <p>Selecciona un robot para ver los detalles.</p>;
  }

  return (
    <Card>
      <Card.Title>{robot.nombre}</Card.Title>
      <Card.Img variant="top" src={robot.imagen} />
      <Card.Body>
        <Card.Text>
          <strong>Modelo:</strong> {robot.modelo} <br />
          <strong>Fabricante:</strong> {robot.fabricante} <br />
          <strong>Año de fabricación:</strong> {robot.anio} <br />
          <strong>Capacidad de procesamiento:</strong> {robot.capacidad} <br />
          <strong>Humor:</strong> {robot.humor}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RobotDetail;
