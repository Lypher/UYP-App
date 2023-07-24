import React from 'react'
import styles from "./Login.module.css"
import Footer from '../Footer/Footer'

 function Login() {
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
          <button className={styles.iniciarSesion}>Iniciar Sesion</button>
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