import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const RobotList = ({ robots, onSelectRobot }) => {
  const { t } = useTranslation();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>{t('name')}</th>
          <th>{t('model')}</th>
          <th>{t('manufacturer')}</th>
          <th>{t('action')}</th>
        </tr>
      </thead>
      <tbody>
        {robots.map((robot) => (
          <tr key={robot.id} onClick={() => onSelectRobot(robot)}>
            <td>{robot.nombre}</td>
            <td>{robot.modelo}</td>
            <td>{robot.empresaFabricante}</td>
            <td>
              <Button variant="info">{t('view_details')}</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RobotList;
