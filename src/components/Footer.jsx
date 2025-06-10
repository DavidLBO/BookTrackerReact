// src/components/common/Footer/Footer.jsx
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} BookTracker versão React. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;