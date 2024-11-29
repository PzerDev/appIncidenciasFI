import React, { useState } from 'react';
import Login from './Login';
import App from '../../App';
import InfoAcceso from '../../Datos/InfoAcceso';
import './AppLogin.css';

const AppLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado para el loader

  const handleLogin = (e) => {
    // e.preventDefault();
    setIsLoading(true); // Activa el loader
    
    // Simula un retraso para la validación (por ejemplo, simulación de llamada a API)
    setTimeout(() => {
        // Buscar el usuario en el arreglo de usuarios
        const user = InfoAcceso.find(
          (user) => user.username === username && user.password === password
        );
  
        if (user) {
          setIsAuthenticated(true); // Autenticación exitosa
        } else {
          alert('Usuario o contraseña incorrectos');
        }
  
        setIsLoading(false); // Desactiva el loader
      }, 2000); // Retraso de 2 segundos
    };

  // Si está autenticado, muestra el contenido principal; si no, muestra el inicio de sesión.
  return (
    <div>
      {isAuthenticated ? (
        <App />
      ) : isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
          <p>Validando credenciales...</p>
        </div>
      ) : (
        <Login 
          onLogin={handleLogin} 
          setUsername={setUsername} 
          setPassword={setPassword} 
        />
      )}
    </div>
  );
};

export default AppLogin;
