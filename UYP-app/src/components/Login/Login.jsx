import React from 'react'
import styles from "./Login.module.css"
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'

 function Login() {
   let scroll = () =>{
    window.scrollTo(0, 0);
   }
  return (
    
      <div className={styles.login}>
        <div className={styles.container}>
        <div className={styles.derecha}>
          <h1>Hola de nuevo</h1>
          <p>Ingresa tus datos para iniciar sesion</p>
          
          <label htmlFor="">Email:</label>
          <input type="text"  />
          <label htmlFor="">Contraseña:</label>
          <input type="password"  />

          <button className={styles.registrarse}>Registrarte</button>
          <NavLink className={styles.iniciarSesion} to="/userList" onClick={scroll}>
          Iniciar Sesion
        </NavLink>
      
        </div>
        <div className={styles.izquierda}>
        <img src="../Img/contacto.png" alt="" />
        </div>
        
        </div>
              
      <Footer />
    </div>
  )
}

export default Login