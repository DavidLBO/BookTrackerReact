// src/pages/Home/Home.jsx
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Bem-vindo ao Nosso Projeto</h1>
      <p>Esta é a página inicial da nossa aplicação web.</p>
      
      <div className={styles.actions}>
        <Link to="/register" className={styles.button}>
          Ir para Cadastro
        </Link>
        <Link to="/items" className={styles.button}>
          Ver Itens Cadastrados
        </Link>
      </div>
    </div>
  );
};

export default Home;