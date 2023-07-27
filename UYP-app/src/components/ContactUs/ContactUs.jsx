import React from 'react'
import styles from "./ContactUs.module.css"
 function ContactUs() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.izquierda}>
         
        </div>
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
    </div>
  )
}
export default ContactUs;