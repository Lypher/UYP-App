import React from 'react'
import styles from "./Footer.module.css"

 function Footer() {
  return (
    <div>
         <footer className={styles.footer}>
    <img className={styles.circulo} src="../Img/logoFooter.png" alt="" />
    <div className={styles.listado}>
      <div className={styles.lista}>
        <p>Inicio</p>
        <p>Contacto</p>
        <p>Ingresar</p>
      </div>
        <p>© 2023 Unidad y Progreso. Desarrollado por  Williams M. & Acosta E.</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer;