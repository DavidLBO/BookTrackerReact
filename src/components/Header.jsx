// src/components/common/Header/Header.jsx
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">Meu Projeto</Link>
        </div>
        <ul className={styles.navList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Cadastro</Link>
          </li>
          <li>
            <Link to="/items">Itens</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;