import styles from "./UserList.module.css"
import Footer from '../../Footer/Footer';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";


function UserList() {
const [list, setList] = useState([]);
useEffect(()=>{
  fetch("http://localhost:3001/usuarios")
  .then(response=>response.json())
  .then(data=>setList(data))
},[])
console.log(list)

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
          
            {
              list .sort((a, b) => a.id - b.id) .map(list =>{
                return(
                  
                  <div key={list.id} className={styles.card}>
          <div className={styles.name}>
          <p className={styles.namee}>{list.name} </p>
          <p className={styles.apellido}>{list.apellido}</p>
          </div>
          <p className={styles.dni}>{list.dni}</p>
          <p className={styles.codRenatep}>Codigo Renatep:</p>
          <p>{list.crenatep}</p>
          <div className={styles.verMas}>
         <NavLink to={`/detail/${list.id}`}> <p >Ver más</p></NavLink> 
           <img className={styles.verMasIcono} src="../Img/verMas.png" alt="" />
          </div>
                  </div>
                )
              })
            }
      </div>
      <Footer />
    </div>
    
  )
}

export default UserList;