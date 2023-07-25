import React from 'react'
import styles from "./UserDetail.module.css"

 function UserDetail() {
  return (
    <div>
      <div className={styles.Card}>
        <img src="" alt="" />
        <h1>Nombre</h1>
        <h3>sexo</h3>
        <h3>DNI</h3>
        <h3>Codigo renatep</h3>
      </div>

      <div className={styles.datos}>
        <h4>Cuil:</h4>
        <h4>Email:</h4>
        <h4>Linea de programa:</h4>
        <h4>Fecha De nacimiento:</h4>
        <h4>Nacionalidad:</h4>  
        <h4>Provincia:</h4>
        <h4>Municipio donde Vive:</h4>
        <h4>Localidad:</h4>
        <h4>Calle:</h4>
        <h4>n:</h4>
        <h4>Codigo Postal:</h4>
        <h4>Telefono/celular:</h4>

        <div className={styles.botones}>
          <button>Modificar</button>
          <button>Guardar</button>
          <button>x</button>
        </div>
      </div>
    </div>
  )
}
export default UserDetail;