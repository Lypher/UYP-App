import { useState,useEffect } from "react";
import styles from "./UserDetailForm.module.css"

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
      <div className={styles.Card}>
       
        <img src="" alt="" />
        <div className={styles.input}><h3>Nombre:</h3> <input type="text" name="nombre" value={data.nombre} onChange={handleInputChange}/></div>
        <div className={styles.input}><h3>Sexo:</h3>
        <select name="sexo" value={data.sexo} onChange={handleInputChange}>
    <option value="Hombre">Hombre</option>
    <option value="Mujer">Mujer</option>
  </select>
        </div>
        <div className={styles.input}><h3>DNI:</h3> <input type="text" name="dni" value={data.dni} onChange={handleInputChange} /></div>
        <div className={styles.input}><h3>Codigo renatep:</h3> <input type="text" name="crenatep" value={data.crenatep} onChange={handleInputChange} /></div>
      </div>

      <div className={styles.datos}>
        <div className={styles.input}><h4>Cuil:</h4> <input type="text" name="cuil" value={data.cuil} onChange={handleInputChange} /></div>
        <div className={styles.input}><h4>Email:</h4> <input type="text" name="email" value={data.email} onChange={handleInputChange} /></div>
        <div className={styles.input}><h4>Linea de programa:</h4> <input type="text" name="lineaPrograma" value={data.lineaPrograma} onChange={handleInputChange}/></div>
        <div className={styles.input}><h4>Fecha De nacimiento:</h4> <input type="text" name="nacimiento" value={data.nacimiento} onChange={handleInputChange}/></div>
        <div className={styles.input}><h4>Nacionalidad:</h4>   <input type="text" name="nacionalidad" value={data.nacionalidad} onChange={handleInputChange}/></div>
        <div className={styles.input}><h4>Provincia:</h4> <input type="text" name="provincia" value={data.provincia} onChange={handleInputChange}/></div>
        <div className={styles.input}><h4>Municipio donde Vive:</h4> <input type="text" name="municipio" value={data.municipio} onChange={handleInputChange}/></div>
        <div className={styles.input}><h4>Localidad:</h4> <input type="text" name="localidad" value={data.localidad} onChange={handleInputChange}/></div>
        <div className={styles.input}><h4>Calle:</h4> <input type="text" name="calle" value={data.calle} onChange={handleInputChange}/></div>
        <div className={styles.input}><h4>n:</h4> <input type="text" name="callenumero" value={data.callenumero} onChange={handleInputChange}/></div>
        <div className={styles.input}><h4>Codigo Postal:</h4> <input type="text" name="codigopostal" value={data.codigopostal} onChange={handleInputChange}/></div>
        <div className={styles.input}><h4>Telefono/celular:</h4>  <input type="text" name="telefono" value={data.telefono} onChange={handleInputChange}/></div>

        <div className={styles.botones}>
          <button>ingresar usuario</button>
        </div>
      </div>
      </form>
    </div>
  )
}
export default UserDetailForm;