import React from 'react'
import styles from "./Footer.module.css"
import { NavLink } from 'react-router-dom';


 function Footer() {
  return (
    <div>
         <footer className={styles.footer}>
    <div className={styles.circulo}></div>
      <div className={styles.lista}>
        <NavLink to="/home">
        <h4>Inicio</h4>
        </NavLink>
        <NavLink to="/contact">
        <h4>Contacto</h4>
        </NavLink>
      <NavLink to="/login">
      <h4>Ingresar</h4>
      </NavLink>
      </div>
      <div>
        <h4>© 2023 Unidad y Progreso. Desarrollado por  Williams M. & Acosta E.</h4>
      </div>
    </footer>
    </div>
  )
}

export default Footer;