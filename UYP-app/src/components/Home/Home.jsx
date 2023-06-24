import React from 'react'
import styles from "./Home.module.css"
function Home() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.Uyp}>        
        <h1>Unidad y Progreso</h1>
        <img className={styles.img} src="https://imagenes.elpais.com/resizer/v1ikOMkmgqn7IdlxC5eIbkd0V98=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/PC23542FFFFVIVZPAO7OQ26INA.jpg" alt="" />
      </div>
    <br />
    <div className={styles.queEs}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0Yk8MwA_xo3UzFAzy_bzPNoG0bgubt7bDoHBmpFxJqDuo_l10RhdaPG3h_sjKgPIb4U&usqp=CAU" alt="" />
      <div className={styles.texto}>
      <div className={styles.texto1}>Unidad y Progreso ¿Que es?</div>
      <div>Unidad y Progreso es una cooperativa de trabajo independiente fundada por Andrés Obregon en el año 2023. Unidad y Progreso es una cooperativa de trabajo independiente fundada por Andrés Obregon en el año 2023. trabajo independiente fundada por Andrés Obregon en el año 2023. Unidad y Progreso es una cooperativa de trabajo independiente fundada por Andrés Obregon en el año 2023. Unidad y Progreso es una cooperativa de trabajo independiente fundada por Andrés Obregon en el año. </div>
      </div>
    </div>

    <br />

    <div>
    <h2>“Unidad y Progreso es una cooperativa de trabajo independiente que surge a raiz de la necesidad de tener nuestro propio espacio donde poder aportar un granito de arena a los jovenes” </h2>
    </div>

    <div className={styles.jovenes}>
      <div className={styles.textodivision1}>
        <div className={styles.textodivision2}> 
          <div>
          <h1 className={styles.colortexto}>50</h1>
          <h4>empleados activos</h4>
          </div>
          <div>
          <h1 className={styles.colortexto}>10</h1>
          <h4>años de experiencia</h4>
          </div>
        
        </div>
        <h4>Tenemos mas de 50 jóvenes a nuestro cargo brindando distintos servicios. Todos ellos a cargo de nuestro representante Nelson Andres Obregon el cual lleva mas de 10 años en el rubro.</h4>
        
      </div>
      <img className={styles.jovenesImg}  src="https://www.trenquelauquen.gov.ar/wordpress/wp-content/uploads/OFICINA-DE-EMPLEO-1080x675.jpeg" alt="" />
    </div>

    <footer></footer>
    </div>
  )
}

export default Home;