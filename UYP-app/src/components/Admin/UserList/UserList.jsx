import React from 'react'
import styles from "./UserList.module.css"
import Footer from '../../Footer/Footer';
import { NavLink } from 'react-router-dom';

function UserList() {
  return (
    <div>
      <h1 className={styles.titulo}>Administracion</h1>
      <h3 className={styles.subtitulo}>Listado de Afiliados Union y Progreso</h3>
      
        <div className={styles.botones}>
        <img className={styles.icono} src="../Img/buscador.png" alt="" />
        <input placeholder="Nombre y apellido" className={styles.buscador}></input>
        <button className={styles.buscar}>Buscar</button>
        <NavLink className={styles.ingresar} to= "/userForm">Ingresar</NavLink>
        </div>
      
        
      
      <div className={styles.cardContainer}>
      <div className={styles.card}>
          <div className={styles.name}>
          <p className={styles.namee}>ENZO MARIANO </p>
          <p className={styles.apellido}>ACOSTA</p>
          </div>
          <p className={styles.dni}>DNI: 36.650.624</p>
          <p className={styles.codRenatep}>Codigo Renatep:</p>
          <p>2222222</p>
          <div className={styles.verMas}>
         <NavLink to="/detail"> <p >Ver más</p></NavLink> 
           <img className={styles.verMasIcono} src="../Img/verMas.png" alt="" />
          </div>
           
        </div>
        <div className={styles.card}>
          <div className={styles.name}>
          <p className={styles.namee}>ENZO MARIANO </p>
          <p className={styles.apellido}>ACOSTA</p>
          </div>
          <p className={styles.dni}>DNI: 36.650.624</p>
          <p className={styles.codRenatep}>Codigo Renatep:</p>
          <p>2222222</p>
          <div className={styles.verMas}>
          <p >Ver más</p>
           <img className={styles.verMasIcono} src="../Img/verMas.png" alt="" />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.name}>
          <p className={styles.namee}>ENZO MARIANO </p>
          <p className={styles.apellido}>ACOSTA</p>
          </div>
          <p className={styles.dni}>DNI: 36.650.624</p>
          <p className={styles.codRenatep}>Codigo Renatep:</p>
          <p>2222222</p>
          <div className={styles.verMas}>
          <p >Ver más</p>
           <img className={styles.verMasIcono} src="../Img/verMas.png" alt="" />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.name}>
          <p className={styles.namee}>ENZO MARIANO </p>
          <p className={styles.apellido}>ACOSTA</p>
          </div>
          <p className={styles.dni}>DNI: 36.650.624</p>
          <p className={styles.codRenatep}>Codigo Renatep:</p>
          <p>2222222</p>
          <div className={styles.verMas}>
          <p >Ver más</p>
           <img className={styles.verMasIcono} src="../Img/verMas.png" alt="" />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.name}>
          <p className={styles.namee}>ENZO MARIANO </p>
          <p className={styles.apellido}>ACOSTA</p>
          </div>
          <p className={styles.dni}>DNI: 36.650.624</p>
          <p className={styles.codRenatep}>Codigo Renatep:</p>
          <p>2222222</p>
          <div className={styles.verMas}>
          <p >Ver más</p>
           <img className={styles.verMasIcono} src="../Img/verMas.png" alt="" />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.name}>
          <p className={styles.namee}>ENZO MARIANO </p>
          <p className={styles.apellido}>ACOSTA</p>
          </div>
          <p className={styles.dni}>DNI: 36.650.624</p>
          <p className={styles.codRenatep}>Codigo Renatep:</p>
          <p>2222222</p>
          <div className={styles.verMas}>
          <p >Ver más</p>
           <img className={styles.verMasIcono} src="../Img/verMas.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default UserList;