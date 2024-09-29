import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const LoginForm = ({ onLogin }) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login: username, password: password }),
      });

      const data = await response.json();
      if (response.status === 200) {
        onLogin(true);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error al conectarse con el backend', err);
      setError(true);
    }
  };

  return (
    <div className="container mt-5">
      <h2>{t('login_title')}</h2>
      {error && <Alert variant="danger">{t('login_failed')}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <label>{t('username')}</label>
          <Form.Control
            type="text"
            placeholder={t('username_placeholder')}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <label>{t('password')}</label>
          <Form.Control
            type="password"
            placeholder={t('password_placeholder')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {t('login_button')}
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
