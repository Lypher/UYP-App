import styles from "./UserList.module.css";
import Footer from '../../Footer/Footer';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";

function UserList() {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  
  useEffect(() => {
    fetch("http://localhost:3001/usuarios")
      .then(response => response.json())
      .then(data => setList(data));
  }, []);

  const totalPages = Math.ceil(list.length / itemsPerPage);

  const handlePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePagePrev = () => {
    if (currentPage > 1) {
      handlePage(currentPage - 1);
    }
  };

  const handlePageNext = () => {
    if (currentPage < totalPages) {
      handlePage(currentPage + 1);
    }
  };

  const paginatedList = list.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <h1 className={styles.titulo}>Administración</h1>
      <h3 className={styles.subtitulo}>Listado de Afiliados Union y Progreso</h3>
      
      <div className={styles.botones}>
        <img className={styles.icono} src="../Img/buscador.png" alt="" />
        <input placeholder="Nombre y apellido" className={styles.buscador}></input>
        <button className={styles.buscar}>Buscar</button>
        <NavLink className={styles.ingresar} to="/userForm">Ingresar</NavLink>
      </div>
      
      <div className={styles.cardContainer}>
        {paginatedList.map(item => (
          <div key={item.id} className={styles.card}>
            <div className={styles.name}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.apellido}>{item.apellido}</p>
            </div>
            <p className={styles.dni}>Dni: {item.dni}</p>
            <p className={styles.codRenatep}>Codigo Renatep:</p>
            <p>{item.crenatep}</p>
            <div className={styles.verMas}>
              <NavLink to={`/detail/${item.id}`}>
                <p>Ver más</p>
              </NavLink>
              <img className={styles.verMasIcono} src="../Img/verMas.png" alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        {currentPage > 1 && <button onClick={handlePagePrev}>&lArr;</button>}
        {[...Array(totalPages).keys()].map((i) => (
          <button
            onClick={() => handlePage(i + 1)}
            className={currentPage === i + 1 ? styles.active : ''}
            key={i}
          >
            {i + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button onClick={handlePageNext}>&rArr;</button>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default UserList;
