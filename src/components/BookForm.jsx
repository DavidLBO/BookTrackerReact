import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import styles from './BookForm.module.css';

const BookForm = () => {
  const { addBook } = useAppContext();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    rating: 1,
    review: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setMessage('Você precisa estar logado para adicionar livros.');
      return;
    }

    const result = await addBook({ ...formData, userId: user.id });
    if (result.success) {
      setMessage('Livro adicionado com sucesso!');
      setFormData({ title: '', author: '', category: '', rating: 1, review: '' });
    } else {
      setMessage(`Erro: ${result.error}`);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Adicionar Livro</h2>
      <input name="title" placeholder="Título" value={formData.title} onChange={handleChange} required />
      <input name="author" placeholder="Autor" value={formData.author} onChange={handleChange} required />
      <input name="category" placeholder="Categoria" value={formData.category} onChange={handleChange} required />
      <input type="number" name="rating" min="1" max="5" placeholder="Nota (1-5)" value={formData.rating} onChange={handleChange} required />
      <textarea name="review" placeholder="Resenha" value={formData.review} onChange={handleChange} required />
      <button type="submit">Cadastrar</button>
      {message && <p className={styles.message}>{message}</p>}
    </form>
  );
};

export default BookForm;
