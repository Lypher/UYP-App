import React from 'react'
import styles from "./UserList.module.css"

function UserList() {
  return (
    <div>
      <h1>Administracion</h1>
      <h3>Listado de Afiliados Union y Progreso</h3>
      <div className={styles.botones}>
        <input placeholder="Nombre y apellido" className={styles.input}></input>
        <button className={styles.buscar}>Buscar</button>
        <button className={styles.ingresar}>Ingresar</button>
      </div>
      <div className={styles.CardContainer}>
        <div className={styles.Card}>
          <p className={styles.name}>Enzo Mariano Acosta</p>
          <p className={styles.dni}>DNI: 36.650.624</p>
          <p className={styles.codRenatep}>Codigo Renatep: 202526</p>
           <p className={styles.verMas}>Ver más</p>
           <button className={styles.button}> ⇨ </button>
        </div>
      
      </div>
    </div>
  )
}

export default UserList;