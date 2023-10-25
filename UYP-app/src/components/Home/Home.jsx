import styles from "./Home.module.css"
import Footer from '../Footer/Footer';
function Home() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.uyp}>
        <div className={styles.titulo}>
        <h1 className={styles.unidadY}>Unidad y </h1>
        <h1 className={styles.progreso}>Progreso</h1>
          </div>        
        <img className={styles.img} src="../Img/logo.svg" alt="" />
      </div>
    <div className={styles.queEs}>
      <img className={styles.uypImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0Yk8MwA_xo3UzFAzy_bzPNoG0bgubt7bDoHBmpFxJqDuo_l10RhdaPG3h_sjKgPIb4U&usqp=CAU" alt="" />
      <div>
      <div className={styles.texto1}> <p className={styles.textoUyP}>Unidad y Progreso</p> ¿Que es?</div>
      <div className={styles.queEsContenedor} >
      <div className={styles.texto}> Unidad y Progreso es una cooperativa de trabajo independiente fundada por Andrés Obregon en el año 2023. Unidad y Progreso es una cooperativa de trabajo independiente fundada por Andrés Obregon en el año 2023. trabajo independiente fundada por Andrés Obregon en el año 2023. Unidad y Progreso es una cooperativa de trabajo independiente fundada por Andrés Obregon en el año 2023. Unidad y Progreso es una cooperativa de trabajo independiente fundada por Andrés Obregon en el año. </div>
      <img className={styles.arrow} src="../Img/arrow.png" alt="" onClick={() => window.scrollTo(0, document.documentElement.scrollHeight/3)}/>
      </div>
      </div>
      
    </div>
    
    <h2 className={styles.cooperativa}>“<b>Unidad y Progreso</b> es una cooperativa de trabajo independiente que surge a raiz de la necesidad de tener nuestro propio espacio donde poder aportar un granito de arena a los jovenes ” </h2>

    <div className={styles.jovenes}>
      <div className={styles.textodivision1}>
        <div className={styles.textodivision2}> 
          <div>
          <h3 className={styles.colortexto}>50+</h3>
          <p className={styles.empleadosAños}>Empleados <br/>activos</p>
          </div>
          <div>
          <h3 className={styles.colortexto}>10+</h3>
          <p className={styles.empleadosAños}>Años de <br /> experiencia</p>
          </div>
        
        </div>
        <p className={styles.masDeCincuenta}>Tenemos mas de 50 jóvenes a nuestro cargo brindando distintos servicios. Todos ellos a cargo de nuestro representante Nelson Andres Obregon el cual lleva mas de 10 años en el rubro.</p>
        
      </div>
      <img className={styles.jovenesImg}  src="https://www.trenquelauquen.gov.ar/wordpress/wp-content/uploads/OFICINA-DE-EMPLEO-1080x675.jpeg" alt="" />
    </div>
    <br />
    <div className={styles.quieroContactarme}>
    <div className={styles.qcizquierda}>
      <p>Si te interesa conocer mas acerca de nuestra cooperativa de trabajo o tenes ganas de formar parte de nosotros no dudes en contactarnos </p>
     <h2 className={styles.teEsperamos}>¡Te esperamos!</h2>
    </div>
    <div className={styles.qcderecha}>
      <div className={styles.circulo}><img className={styles.circuloCruz} src="../Img/cruzCirculo.png" alt="" /></div>
      <div className={styles.contactarme}>
      <p className={styles.quiero} >Quiero </p>
      <p className={styles.quiero} >Contactarme</p>
      </div>
      
    </div>
    </div>

      <h2 className={styles.conocenos}>Conocenos un poquito más</h2>

    <div className={styles.cards}>
    <div className={styles.card}>
      <h2>Misión</h2>
      <p>Mientras que el objetivo de una declaración de misión es describir el «qué» y «hacia quién» de una empresa, la declaración de visión refiere al «porqué» y al «cómo» y los valores apuntan hacia aquello en lo que cree una organización y bajo qué principios se rige.</p>
    </div>
    <div className={styles.card}>
      <h2>Visión</h2>
      <p>Mientras que el objetivo de una declaración de misión es describir el «qué» y «hacia quién» de una empresa, la declaración de visión refiere al «porqué» y al «cómo» y los valores apuntan hacia aquello en lo que cree una organización y bajo qué principios se rige.</p>
    </div>
    <div className={styles.card}>
      <h2>Valores</h2>
      <p>Mientras que el objetivo de una declaración de misión es describir el «qué» y «hacia quién» de una empresa, la declaración de visión refiere al «porqué» y al «cómo» y los valores apuntan hacia aquello en lo que cree una organización y bajo qué principios se rige.</p>
    </div>
    </div>


    <img  className={styles.imgabajo} src="../Img/image.png" alt="" />

   <Footer/>
    </div>
  )
}

export default Home;