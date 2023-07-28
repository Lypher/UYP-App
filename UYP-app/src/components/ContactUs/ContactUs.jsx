import React from 'react'
import styles from "./ContactUs.module.css"
import Footer from '../Footer/Footer';
 function ContactUs() {
  return (
    <div className={styles.contacto}>
      <div className={styles.container}>
        <img className={styles.contactoLogo} src="../Img/logo.svg" alt="" />
        <div className={styles.derecha}>
        <h3>Para mas informacion</h3>
          <h1>Contactanos</h1>
          <div className={styles.redes}>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Whatsapp</li>
              <li>Mail</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default ContactUs;