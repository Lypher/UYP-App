import React from 'react'
import styles from "./Error404.module.css"
import Footer from '../Footer/Footer'

 function Error404() {
  return (
    <div className='Error404'>
      <h1>404</h1>
      <h2>Pagina no encontrada</h2>
      <p>Parece que la pagina que estas buscando no existe descubre lo que
        ofrecemos en la <a href="">pagina de inicio</a>
      </p>

    <br />
    <Footer />
    </div>
  )
}
export default Error404
