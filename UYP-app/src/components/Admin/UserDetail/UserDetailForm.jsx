import React from 'react'
import styles from "./UserDetailForm.module.css"

 function UserDetailForm() {
  return (
    <div>
         <div>
      <div className={styles.Card}>
        <img src="" alt="" />
        <h1>Nombre</h1>
        <h3>sexo</h3>
        <h3>DNI</h3>
        <h3>Codigo renatep</h3>
      </div>

      <div className={styles.datos}>
        <h4>Cuil:</h4> <input type="text" />
        <h4>Email:</h4> <input type="text" />
        <h4>Linea de programa:</h4> <input type="text" />
        <h4>Fecha De nacimiento:</h4> <input type="text" />
        <h4>Nacionalidad:</h4>   <input type="text" />
        <h4>Provincia:</h4> <input type="text" />
        <h4>Municipio donde Vive:</h4> <input type="text" />
        <h4>Localidad:</h4> <input type="text" />
        <h4>Calle:</h4> <input type="text" />
        <h4>n:</h4> <input type="text" />
        <h4>Codigo Postal:</h4> <input type="text" />
        <h4>Telefono/celular:</h4>  <input type="text" />

        <div className={styles.botones}>
          <button>ingresar usuario</button>
        </div>
      </div>
    </div>
    </div>
  )
}
export default UserDetailForm;