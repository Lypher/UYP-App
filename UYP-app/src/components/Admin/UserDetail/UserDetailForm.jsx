import { useState,useEffect } from "react";
import styles from "./UserDetailForm.module.css"
import Footer from "../../Footer/Footer";

 function UserDetailForm() {

  const [data,setData] = useState(
    {
      nombre:"",
      sexo:"",
      dni:"",
      crenatep:"",
      cuil:"",
      email:"",
      lineaPrograma:"",
      nacimiento:"",
      nacionalidad:"",
      provincia:"",
      municipio:"",
      localidad:"",
      calle:"",
      callenumero:"",
      codigopostal:"",
      telefono:"",
    }
  )

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  
  useEffect(() => {
    console.log(data);
  }, [data]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const game = {
      ...gameData,
      rating: parseInt(gameData.rating),
      genres: gameData.genres.map((genre) => parseInt(genre)),
    };
    !game.image.length && delete game.image;
    dispatch(getAllGames());
    if (!gameData.name.length) alert("necesitas llenar el formulario");
    else {
      const newGame = await axios.post(`${url}/videogames`, game);
      alert("Tu juego ha sido creado con exito!");
      window.scrollTo(0, 0);
      setGameData({
        name: "",
        description: "",
        released: "",
        image: "",
        rating: "",
        platforms: "",
        genres: [],
      });
      return newGame;
    }}


  return (
    <div className={styles.componente}>
      <form onSubmit={handleSubmit}>
      <div className={styles.detailCard}>
       
        <img className={styles.detailImg} src="../Img/imagenNuevoAfiliado.png" alt="" />
        <div className={styles.detailDatosPrincipales}>
            
         <input className={styles.nombre} placeholder="NOMBRE Y APELLIDO" type="text" name="nombre" value={data.nombre} onChange={handleInputChange}/>
         <input className={styles.detailInput} placeholder="Sexo:" type="text" name="sexo" value={data.sexo} onChange={handleInputChange} />
         <input className={styles.detailInput} placeholder="DNI:" type="text" name="dni" value={data.dni} onChange={handleInputChange} />
         <input className={styles.detailInput} placeholder="Codigo Renatep:" type="text" name="crenatep" value={data.crenatep} onChange={handleInputChange} />
      </div>
        </div>
        

      <div className={styles.datosContainer}>
        <div className={styles.datosDiv}>
        <div className={styles.datos}><label>Cuil:</label> <input type="text" name="cuil" value={data.cuil} onChange={handleInputChange} /></div>
        <div className={styles.datos}><label>Email:</label> <input type="text" name="email" value={data.email} onChange={handleInputChange} /></div>
        <div className={styles.datos}><label>Linea de programa:</label> <input type="text" name="lineaPrograma" value={data.lineaPrograma} onChange={handleInputChange}/></div>
        <div className={styles.datos}><label>Fecha De nacimiento:</label> <input type="text" name="nacimiento" value={data.nacimiento} onChange={handleInputChange}/></div>
        <div className={styles.datos}><label>Nacionalidad:</label>   <input type="text" name="nacionalidad" value={data.nacionalidad} onChange={handleInputChange}/></div>
        <div className={styles.datos}><label>Provincia:</label> <input type="text" name="provincia" value={data.provincia} onChange={handleInputChange}/></div>
        <div className={styles.datos}><label>Municipio donde Vive:</label> <input type="text" name="municipio" value={data.municipio} onChange={handleInputChange}/></div>
        <div className={styles.datos}><label>Localidad:</label> <input type="text" name="localidad" value={data.localidad} onChange={handleInputChange}/></div>
        <div className={styles.datos}><label>Calle:</label> <input className={styles.datosCalle} type="text" name="calle" value={data.calle} onChange={handleInputChange}/><label>n:</label> <input type="text" name="callenumero" value={data.callenumero} onChange={handleInputChange}/></div>
        <div className={styles.datos}><label>Codigo Postal:</label> <input type="text" name="codigopostal" value={data.codigopostal} onChange={handleInputChange}/></div>
        <div className={styles.datos}><label>Telefono/celular:</label>  <input type="text" name="telefono" value={data.telefono} onChange={handleInputChange}/></div>
       
          <button className={styles.ingresarUsuario}>Ingresar afiliado</button>
       
        </div>
        

        
      </div>
      </form>
      <Footer />
    </div>
  )
}
export default UserDetailForm;