import styles from './BookPage.module.css';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const BooksPage = () => {
  return (
    <div className={styles.container}>
      <h1>Meus Livros</h1>
      <BookForm />
      <BookList />
    </div>
  );
};

export default BooksPage;
