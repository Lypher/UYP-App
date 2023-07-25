import styles from "./Login.module.css"
import Footer from '../Footer/Footer'
import validation from "./validation";
import { useState } from "react";

 function Login() {

  const [userData, setUserData] = useState({
    usermail: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    usermail: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  

  };

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.derecha}>
          <h1>Hola de nuevo</h1>
          <p>Ingresa tus datos para iniciar sesion</p>
     
          <input type="text" placeholder='Email' name= "usermail" value={userData.usermail} onChange={handleInputChange} />
          {errors.usermail && (
            <p style={{ color: "red", fontSize: "11px", fontWeight: "bold" }}>
              {errors.usermail}
            </p>
          )}
          <input type="password" placeholder='Contraseña' name= "password" value={userData.password}  onChange={handleInputChange}/>
          {errors.password && (
            <p style={{ color: "red", fontSize: "11px", fontWeight: "bold" }}>
              {errors.password}
            </p>
          )}
          <button onClick={handleSubmit}>Iniciar Sesion</button>
          <button>Registrarte</button>
         
        </div>
        <div className={styles.izquierda}>
          <img src="https://www.ulibertadores.edu.co/wp-content/uploads/Estas-profesiones-te-permitiran-trabajar-desde-casa.png" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login