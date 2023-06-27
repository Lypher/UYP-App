import React from 'react'
import styles from "./Footer.module.css"

 function Footer() {
  return (
    <div>
         <footer className={styles.footer}>
    <div className={styles.circulo}></div>
      <div className={styles.lista}>
        <h4>Inicio</h4>
        <h4>Contacto</h4>
        <h4>Ingresar</h4>
      </div>
      <div>
        <h4>© 2023 Unidad y Progreso. Desarrollado por  Williams M. & Acosta E.</h4>
      </div>
    </footer>
    </div>
  )
}

export default Footer;