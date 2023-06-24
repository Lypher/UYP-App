import React from 'react'
import styles from "./Navbar.module.css"

 function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.boton}>Ingresar</div>
       
    </div>
  )
}
export default Navbar;