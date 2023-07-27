import styles from "./UserDetail.module.css"
import Footer from "../../Footer/Footer";
 function UserDetail() {
  return (
    <div>
      <div className={styles.detailCard}>
        <img className={styles.detailImg} src="../Img/imagenAfiliado.png" alt="" />
        <div className={styles.detailDatosPrincipales}>
        <h1>ENZO MARIANO <br />ACOSTA</h1>
        <p>Sexo: <b>Masculino</b></p>
        <p>DNI: <b>36650624</b></p>
        <p>Codigo renatep: <b>5555555</b></p>
        </div>  
      </div>

      <div className={styles.datosContainer}>
        <div className={styles.datosDiv}>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Cuil:</label>
            <input  type="text"  placeholder="27366506248"/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Email:</label>
            <input  type="text" placeholder="enzo.acosta@hotmail.com"/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Linea de programa:</label>
            <input  type="text" placeholder="27366506248"/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Fecha De nacimiento:</label>
            <input  type="text" placeholder="06/01/1992"/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Nacionalidad:</label>
            <input  type="text" placeholder="Argentina"/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Provincia:</label>
            <input  type="text" placeholder="Chubut"/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Municipio donde Vive:</label>
            <input  type="text" placeholder="Rawson"/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Localidad:</label>
            <input  type="text" placeholder="Trelew"/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Calle:</label>
            <input className={styles.datosCalle} type="text" placeholder="Gregorio Mayo"/>
            <label className={styles.datosLabel} htmlFor="">Nº:</label>
            <input  type="text" placeholder="759"/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Codigo Postal:</label>
            <input  type="text" placeholder="9100"/>
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Telefono/celular:</label>
            <input  type="text" placeholder="2804849514"/>
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