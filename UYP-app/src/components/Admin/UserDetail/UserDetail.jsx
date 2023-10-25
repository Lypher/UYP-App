import styles from "./UserDetail.module.css";
import Footer from "../../Footer/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import axios from "axios";

function UserDetail() {
  const { id } = useParams();

  const [persona, setPersona] = useState({});
  
  const [formData, setFormData] = useState({
    "name": "",
    "apellido": "",
    "sexo": "",
    "cuil": "",
    "email": "",
    "lineaprograma": "",
    "nacimiento": "",
    "nacionalidad": "",
    "provincia": "",
    "municipio": "",
    "localidad": "",
    "calle": "",
    "callenumero": "",
    "codigopostal": "",
    "telefono": "",
    "dni": "",
    "crenatep": "",
  });
  
  const [editMode, setEditMode] = useState(false);

  function llenarCamposVacios(formData, persona) {
    const campos = [
      "name",
      "apellido",
      "sexo",
      "cuil",
      "email",
      "lineaprograma",
      "nacimiento",
      "nacionalidad",
      "provincia",
      "municipio",
      "localidad",
      "calle",
      "callenumero",
      "codigopostal",
      "telefono",
      "dni",
      "crenatep",
    ];

    campos.forEach((campo) => {
      if (formData[campo] === "") {
        formData[campo] = persona[campo];
      }
    });

    return formData;
  }

  const enviarForm = async () => {
    try {
      const formDataLlenado = llenarCamposVacios(formData, persona);
      const response = await axios.put(`http://localhost:3001/usuarios/${id}`, formDataLlenado);
      console.log("respuesta del servidor:", response.data);
      alert("Usuario modificado con éxito!");
      setEditMode(!editMode);
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios(`http://localhost:3001/usuarios/${id}`);
        const personaSeleccionada = response.data;
        setPersona(personaSeleccionada);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    }
    fetchData();

    return () => {
      // Lógica de limpieza si es necesaria
    };
  }, [id]);

  return (
    <div>
    <div>
  <div className={styles.detailCard}>
    <img className={styles.detailImg} src="../Img/imagenAfiliado.png" alt="" />
    <div className={styles.detailDatosPrincipales}>
      <h1>
        {editMode ? (
          <input
            type="text"
            placeholder={persona.name}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            readOnly={!editMode} 
          />
        ) : (
          persona.name
        )}
      </h1>
      <p>
        Sexo:{" "}
        <b>
          {editMode ? (
            <input
              type="text"
              placeholder={persona.sexo}
            value={formData.sexo}
              onChange={(e) => setFormData({ ...formData, sexo: e.target.value })}
              readOnly={!editMode} 
            />
          ) : (
            persona.sexo
          )}
        </b>
      </p>
      <p>
        DNI:{" "}
        <b>
          {editMode ? (
            <input
              type="text"
              placeholder={persona.dni}
            value={formData.dni}
            onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
              readOnly={!editMode} 
            />
          ) : (
            persona.dni
          )}
        </b>
      </p>
      <p>
        Código renatep:{" "}
        <b>
          {editMode ? (
            <input
              type="text"
              placeholder={persona.crenatep}
              value={formData.crenatep}
              onChange={(e) => setFormData({ ...formData, crenatep: e.target.value })}
              readOnly={!editMode} 
              
            />
          ) : (
            persona.crenatep
          )}
        </b>
      </p>
    </div>
  </div>
</div>

      <div className={styles.datosContainer}>
        <div className={styles.datosDiv}>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Cuil:</label>
            <input
              type="text"
              placeholder={persona.cuil}
              value={formData.cuil}
              onChange={(e) => setFormData({ ...formData, cuil: e.target.value })}
              disabled={!editMode}
            />
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Email:</label>
            <input
              type="text"
              placeholder={persona.email}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={!editMode}
            />
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Línea de programa:</label>
            <input
              type="text"
              placeholder={persona.lineaprograma}
              value={formData.lineaprograma}
              onChange={(e) => setFormData({ ...formData, lineaprograma: e.target.value })}
              disabled={!editMode}
            />
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Fecha de nacimiento:</label>
            <input
              type="text"
              placeholder={persona.nacimiento}
              value={formData.nacimiento}
              onChange={(e) => setFormData({ ...formData, nacimiento: e.target.value })}
              disabled={!editMode}
            />
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Nacionalidad:</label>
            <input
              type="text"
              placeholder={persona.nacionalidad}
              value={formData.nacionalidad}
              onChange={(e) => setFormData({ ...formData, nacionalidad: e.target.value })}
              disabled={!editMode}
            />
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Provincia:</label>
            <input
              type="text"
              placeholder={persona.provincia}
              value={formData.provincia}
              onChange={(e) => setFormData({ ...formData, provincia: e.target.value })}
              disabled={!editMode}
            />
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Municipio donde vive:</label>
            <input
              type="text"
              placeholder={persona.municipio}
              value={formData.municipio}
              onChange={(e) => setFormData({ ...formData, municipio: e.target.value })}
              disabled={!editMode}
            />
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Localidad:</label>
            <input
              type="text"
              placeholder={persona.localidad}
              value={formData.localidad}
              onChange={(e) => setFormData({ ...formData, localidad: e.target.value })}
              disabled={!editMode}
            />
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Calle:</label>
            <input
              className={styles.datosCalle}
              type="text"
              placeholder={persona.calle}
              value={formData.calle}
              onChange={(e) => setFormData({ ...formData, calle: e.target.value })}
              disabled={!editMode}
            />
            <label className={styles.datosLabel} htmlFor="">Nº:</label>
            <input
              type="text"
              placeholder={persona.callenumero}
              value={formData.callenumero}
              onChange={(e) => setFormData({ ...formData, callenumero: e.target.value })}
              disabled={!editMode}
            />
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Código Postal:</label>
            <input
              type="text"
              placeholder={persona.codigopostal}
              value={formData.codigopostal}
              onChange={(e) => setFormData({ ...formData, codigopostal: e.target.value })}
              disabled={!editMode}
            />
          </div>
          <div className={styles.datos}>
            <label className={styles.datosLabel} htmlFor="">Teléfono/Celular:</label>
            <input
              type="text"
              placeholder={persona.telefono}
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              disabled={!editMode}
            />
          </div>
          <div className={styles.botones}>
            <button
              className={styles.botonesModificar}
              onClick={() => setEditMode(!editMode)}
            >
              Modificar
            </button>
            <button
              className={styles.botonesGuardar}
              onClick={enviarForm}
              disabled={!editMode}
            >
              Guardar
            </button>
            <button
              className={styles.botonesEliminar}
              disabled={!editMode}
            > 
            <NavLink to = "/userList">  
            <img className={styles.botonesCruz} src="../Img/eliminar.png" alt=""/>  
            </NavLink>


              
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserDetail;
