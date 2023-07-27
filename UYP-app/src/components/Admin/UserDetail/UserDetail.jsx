import styles from "./UserDetail.module.css"
import Footer from "../../Footer/Footer";
 function UserDetail() {
  let traerpersona = localStorage.getItem("Persona");
  const persona = JSON.parse(traerpersona);



  return (
    <div>
      <div className={styles.detailCard}>
        <img className={styles.detailImg} src="../Img/imagenAfiliado.png" alt="" />
        <div className={styles.detailDatosPrincipales}>
        <h1>{persona.nombre}</h1>
        <p>Sexo: <b>{persona.sexo}</b></p>
        <p>DNI: <b>{persona.dni}</b></p>
        <p>Codigo renatep: <b>{persona.crenatep}</b></p>
        </div>  
      </div>

      <div className={styles.datosContainer}>
        <div className={styles.datosDiv}>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Cuil:</label>
            <input  type="text"  placeholder={persona.cuil}/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Email:</label>
            <input  type="text" placeholder={persona.email}/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Linea de programa:</label>
            <input  type="text" placeholder={persona.lineaPrograma}/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Fecha De nacimiento:</label>
            <input  type="text" placeholder={persona.nacimiento}/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Nacionalidad:</label>
            <input  type="text" placeholder={persona.nacionalidad}/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Provincia:</label>
            <input  type="text" placeholder={persona.provincia}/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Municipio donde Vive:</label>
            <input  type="text" placeholder={persona.municipio}/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Localidad:</label>
            <input  type="text" placeholder={persona.localidad}/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Calle:</label>
            <input className={styles.datosCalle} type="text" placeholder={persona.calle}/>
            <label className={styles.datosLabel} htmlFor="">Nº:</label>
            <input  type="text" placeholder={persona.callenumero}/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Codigo Postal:</label>
            <input  type="text" placeholder={persona.codigopostal}/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Telefono/celular:</label>
            <input  type="text" placeholder={persona.telefono}/>
          </div>
          <div className={styles.botones}>
          <button className={styles.botonesModificar}>Modificar</button>
          <button className={styles.botonesGuardar}>Guardar</button>
          <button className={styles.botonesEliminar}><img className={styles.botonesCruz} src="../Img/eliminar.png" alt="" /></button>
        </div>
        </div>
      </div>
    <Footer />
    </div>
  )
}
export default UserDetail;