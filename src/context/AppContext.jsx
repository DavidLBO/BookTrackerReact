import { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import api from '../services/api';

const AppContext = createContext();

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_BOOKS_SUCCESS':
      return { ...state, loading: false, books: action.payload };
    case 'FETCH_BOOKS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_BOOK':
      return { ...state, books: [...state.books, action.payload] };
    case 'DELETE_BOOK':
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children, user }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchBooks = useCallback(async () => {
    dispatch({ type: 'FETCH_BOOKS_REQUEST' });
    try {
      const url = user ? `/books?userId=${user.id}` : '/books';
      const response = await api.get(url);
      dispatch({ type: 'FETCH_BOOKS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_BOOKS_FAILURE', payload: error.message });
    }
  }, [user]);

  const addBook = async (book) => {
    try {
      const response = await api.post('/books', {
        ...book,
        createdAt: new Date().toISOString(),
      });
      dispatch({ type: 'ADD_BOOK', payload: response.data });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const deleteBook = async (id) => {
    try {
      await api.delete(`/books/${id}`);
      dispatch({ type: 'DELETE_BOOK', payload: id });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <AppContext.Provider value={{ state, fetchBooks, addBook, deleteBook }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
