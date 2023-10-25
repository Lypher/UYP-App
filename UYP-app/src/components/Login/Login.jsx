import React, { useState } from 'react';
import styles from "./Login.module.css";
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [mail, setEmail] = useState(''); 
  const [contrasena, setContrasena] = useState('');
  const history = useNavigate(); // Necesitas usar el hook useHistory para redirigir al usuario.

  const handleIniciarSesion = async () => {
    try {
      // Hacer una solicitud al servidor para obtener datos de usuario
      const response = await fetch("http://localhost:3001/registro");
      const data = await response.json();
      
      // Comprobar si existe un usuario con el correo ingresado
      const user = data.find((user) => user.email === mail);

      if (user && user.pass === contrasena) {
        // La combinación de correo y contraseña es válida, redirige al usuario.
        history('/userList');
      } else {
        // Combinación de correo y contraseña no válida, puedes mostrar un mensaje de error.
        alert("Correo o contraseña incorrectos");
      }
    } catch (error) {
      // Manejo de errores en caso de que la solicitud falle
      console.error("Error al iniciar sesión:", error);
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.derecha}>
          <h1>Hola de nuevo</h1>
          <p>Ingresa tus datos para iniciar sesión</p>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={mail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <button className={styles.registrarse}>Registrarte</button>
          <button className={styles.iniciarSesion} onClick={handleIniciarSesion}>
            Iniciar Sesión
          </button>
        </div>
        <div className={styles.izquierda}>
          <img src="../Img/contacto.png" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
