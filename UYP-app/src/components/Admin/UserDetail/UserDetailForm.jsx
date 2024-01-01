import { useState } from "react";
import styles from "./UserDetailForm.module.css"
import Footer from "../../Footer/Footer";
import axios from "axios";

function UserDetailForm() {

  const [images, setImages] = useState()

  const [data, setData] = useState(
    {
      name: "",
      apellido: "",
      sexo: "",
      cuil: "",
      email: "",
      lineaprograma: "",
      nacimiento: "",
      nacionalidad: "",
      provincia: "",
      municipio: "",
      localidad: "",
      calle: "",
      callenumero: "",
      codigopostal: "",
      telefono: "",
      dni: "",
      crenatep: ""
    }
  )

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const saveImg = (event) => {
    setImages(event.target.files[0])
    console.log('images: ', images)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`https://servidor-uyp.onrender.com/usuarios`, { img: images, ...data }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log("respuesta del servidor:", response.data);
      alert("Afiliado ingresado con éxito!");
      console.log(data);

      window.scrollTo(0, 0);

      // Reset 'data' to empty values
      setData({
        name: "",
        apellido: "",
        sexo: "",
        cuil: "",
        email: "",
        lineaprograma: "",
        nacimiento: "",
        nacionalidad: "",
        provincia: "",
        municipio: "",
        localidad: "",
        calle: "",
        callenumero: "",
        codigopostal: "",
        telefono: "",
        dni: "",
        crenatep: ""
      });

      // It's unclear where 'nuevaCard' comes from, so this return statement might need adjustment
      // return nuevaCard;
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      // Puedes realizar acciones adicionales para manejar el error aquí si es necesario.
    }
  };



  return (
    <div className={styles.componente}>

      <form onSubmit={handleSubmit}>
        <div className={styles.detailCard}>
          <input type="file" onChange={saveImg} style={{ backgroundColor: 'red' }} />

          <img className={styles.detailImg} src="../Img/imagenNuevoAfiliado.png" alt="" />
          <div className={styles.detailDatosPrincipales}>

            <input className={styles.nombre} placeholder="NOMBRE Y APELLIDO" type="text" name="name" value={data.name} onChange={handleInputChange} />
            <input className={styles.detailInput} placeholder="Sexo:" type="text" name="sexo" value={data.sexo} onChange={handleInputChange} />
            <input className={styles.detailInput} placeholder="DNI:" type="text" name="dni" value={data.dni} onChange={handleInputChange} />
            <input className={styles.detailInput} placeholder="Codigo Renatep:" type="text" name="crenatep" value={data.crenatep} onChange={handleInputChange} />
          </div>
        </div>


        <div className={styles.datosContainer}>
          <div className={styles.datosDiv}>
            <div className={styles.datos}><label>Cuil:</label> <input type="text" name="cuil" value={data.cuil} onChange={handleInputChange} /></div>
            <div className={styles.datos}><label>Email:</label> <input type="text" name="email" value={data.email} onChange={handleInputChange} /></div>
            <div className={styles.datos}><label>Linea de programa:</label> <input type="text" name="lineaprograma" value={data.lineaprograma} onChange={handleInputChange} /></div>
            <div className={styles.datos}><label>Fecha De nacimiento:</label> <input type="text" name="nacimiento" value={data.nacimiento} onChange={handleInputChange} /></div>
            <div className={styles.datos}><label>Nacionalidad:</label>   <input type="text" name="nacionalidad" value={data.nacionalidad} onChange={handleInputChange} /></div>
            <div className={styles.datos}><label>Provincia:</label> <input type="text" name="provincia" value={data.provincia} onChange={handleInputChange} /></div>
            <div className={styles.datos}><label>Municipio donde Vive:</label> <input type="text" name="municipio" value={data.municipio} onChange={handleInputChange} /></div>
            <div className={styles.datos}><label>Localidad:</label> <input type="text" name="localidad" value={data.localidad} onChange={handleInputChange} /></div>
            <div className={styles.datos}><label>Calle:</label> <input className={styles.datosCalle} type="text" name="calle" value={data.calle} onChange={handleInputChange} /><label>Nº:</label> <input type="text" name="callenumero" value={data.callenumero} onChange={handleInputChange} /></div>
            <div className={styles.datos}><label>Codigo Postal:</label> <input type="text" name="codigopostal" value={data.codigopostal} onChange={handleInputChange} /></div>
            <div className={styles.datos}><label>Telefono/celular:</label>  <input type="text" name="telefono" value={data.telefono} onChange={handleInputChange} /></div>

            <button className={styles.ingresarUsuario}>Ingresar afiliado</button>

          </div>



        </div>
      </form>

      <Footer />
    </div>
  )
}
export default UserDetailForm;