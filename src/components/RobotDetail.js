import React from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const RobotDetail = ({robot}) => {
  const { t } = useTranslation();
  const [robotDetail, setRobotDetail] = useState(null);
  
  useEffect(() => {
    if (robot) {
      fetch(`http://localhost:3001/robots/${robot.id}`)
        .then(response => response.json())
        .then(data => setRobotDetail(data))
        .catch(err => console.error('Error fetching robot detail:', err));
    }
  }, [robot]);

  if (!robotDetail) {
    return <p>Selecciona un robot para ver los detalles.</p>;
  }
 
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img 
      variant="top" 
      src={robotDetail.imagen.replace('blob', 'raw')} 
      alt={robotDetail.nombre} 
      className="img-fluid" 
      style={{ 
        maxHeight: '200px', 
        maxWidth: '200px', 
        objectFit: 'cover', 
        margin: 'auto' 
        }} 
      />

      <Card.Body>
        <Card.Title>{robotDetail.nombre}</Card.Title>
        <Card.Text><strong>{t('model')}: </strong>{robotDetail.modelo}</Card.Text>
        <Card.Text><strong>{t('manufacturer')}: </strong>{robotDetail.empresaFabricante}</Card.Text>
        <Card.Text><strong>{t('year_of_manufacture')}: </strong>{robotDetail.anioFabricacion}</Card.Text>
        <Card.Text><strong>{t('processing_capacity')}: </strong>{robotDetail.capacidadProcesamiento}</Card.Text>
        <Card.Text><strong>{t('additional_features')}: </strong>{robotDetail.caracteristicas}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RobotDetail;
