// src/pages/Home/Home.jsx
import styles from './Home.module.css';
import BookList from '../components/BookList';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Bem-vindo ao BookTracker</h1>
      <p>Esta é a página inicial da aplicação, para fazer Login e cadastrar novos livros vá até Livros no topo.</p>
      <BookList />

    </div>
  );
};

export default Home;