import React from 'react'
import styles from "./Navbar.module.css"
import { NavLink } from 'react-router-dom';


 function Navbar() {

  

  return (
    <div className={styles.navbar}>
        <NavLink className={styles.logo} to="/home">Logo</NavLink>
        
        <NavLink className={styles.boton} to="/login">Ingresar</NavLink>
       
    </div>
  )
}
export default Navbar;