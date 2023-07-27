import React from 'react'
import styles from "./Navbar.module.css"
import { NavLink } from 'react-router-dom';


 function Navbar() {

  

  return (
    <div className={styles.navbar}>
        <NavLink className={styles.logo} to="/home">
          <img className={styles.logo} src="../Img/logoChico.svg" alt="" />
        </NavLink>
        
        <NavLink className={styles.boton} to="/login">
        <img className={styles.user}  src="../Img/ingresar.png" alt="" />
        </NavLink>
       
    </div>
  )
}
export default Navbar;