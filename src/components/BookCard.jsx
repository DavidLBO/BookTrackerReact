// src/components/books/BookList/BookCard.jsx
import styles from './BookCard.module.css';

const BookCard = ({ book, onDelete }) => {
  return (
    <div className={styles.card}>
      <h3>{book.title}</h3>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Categoria:</strong> {book.category}</p>
      <p><strong>Nota:</strong> {book.rating}/5</p>
      <p><strong>Resenha:</strong> {book.review}</p>
      <button onClick={onDelete} className={styles.deleteButton}>
        Excluir
      </button>
    </div>
  );
};

export default BookCard;
