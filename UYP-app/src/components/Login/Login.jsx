import React from 'react'
import styles from "./Login.module.css"
import Footer from '../Footer/Footer'

 function Login() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.derecha}>
          <h1>Hola de nuevo</h1>
          <p>Ingresa tus datos para iniciar sesion</p>
          <input type="text" placeholder='Nombre' />
          <input type="text" placeholder='Email' />
          <input type="password" placeholder='Contraseña' />

          <button>Registrarte</button>
          <button>Iniciar Sesion</button>
        </div>
        <div className={styles.izquierda}>
          <img src="https://www.ulibertadores.edu.co/wp-content/uploads/Estas-profesiones-te-permitiran-trabajar-desde-casa.png" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login