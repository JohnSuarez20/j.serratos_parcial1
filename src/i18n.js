import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "login_title": "Login",
      "username": "Username",
      "password": "Password",
      "username_placeholder": "Enter your username",
      "password_placeholder": "Enter your password",
      "login_button": "Login",
      "login_failed": "Invalid credentials, please try again",
      "name": "Name",
      "model": "Model",
      "manufacturer": "Manufacturer",
      "action": "Action",
      "view_details": "View Details",
      "robot_adoption": "Robot Adoption",
      "year_of_manufacture": "Year of Manufacture",
      "processing_capacity": "Processing Capacity",
      "additional_features": "Additional Features"
    }
  },
  es: {
    translation: {
      "login_title": "Iniciar Sesión",
      "username": "Usuario",
      "password": "Contraseña",
      "username_placeholder": "Ingresa tu usuario",
      "password_placeholder": "Ingresa tu contraseña",
      "login_button": "Iniciar sesión",
      "login_failed": "Credenciales incorrectas, intenta de nuevo",
      "name": "Nombre",
      "model": "Modelo",
      "manufacturer": "Fabricante",
      "action": "Acción",
      "view_details": "Ver Detalles",
      "robot_adoption": "Adopción de Robots",
      "year_of_manufacture": "Año de fabricación",
      "processing_capacity": "Capacidad de procesamiento",
      "additional_features": "Características adicionales"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // Idioma predeterminado
  fallbackLng: 'es', // Idioma de reserva
  interpolation: {
    escapeValue: false,
  }
});

export default i18n;
