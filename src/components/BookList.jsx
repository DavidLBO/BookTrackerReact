import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import BookCard from './BookCard';
import styles from './BookList.module.css';

const BookList = () => {
  const { state, fetchBooks, deleteBook } = useAppContext();
  const { books, loading, error } = state;

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  if (loading) return <div className={styles.loading}>Carregando...</div>;
  if (error) return <div className={styles.error}>Erro: {error}</div>;

  return (
    <div className={styles.bookList}>
      {books.length === 0 ? (
        <p className={styles.empty}>Nenhum livro cadastrado</p>
      ) : (
        books.map((book) => (
          <BookCard key={book.id} book={book} onDelete={() => deleteBook(book.id)} />
        ))
      )}
    </div>
  );
};

export default BookList;
