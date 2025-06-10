import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">Book Tracker</Link>
        </div>
        <ul className={styles.navList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!user && (
            <li>
              <Link to="/register">Cadastro</Link>
            </li>
          )}
          <li>
            <Link to="/books">Livros</Link>
          </li>

          {user && (
            <li>
              <button
                onClick={logout}
                className={styles.logoutButton}
                type="button"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
