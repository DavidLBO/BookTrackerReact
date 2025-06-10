// src/components/common/Footer/Footer.jsx
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Meu Projeto Web. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;