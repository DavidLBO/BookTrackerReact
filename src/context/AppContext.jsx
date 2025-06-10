// src/context/AppContext.js
import { createContext, useContext, useReducer, useEffect } from 'react';
import api from '../services/api';

const AppContext = createContext();

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_ITEMS_SUCCESS':
      return { ...state, loading: false, items: action.payload };
    case 'FETCH_ITEMS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchItems = async () => {
    dispatch({ type: 'FETCH_ITEMS_REQUEST' });
    try {
      const response = await api.get('/items');
      dispatch({ type: 'FETCH_ITEMS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_ITEMS_FAILURE', payload: error.message });
    }
  };

  const addItem = async (item) => {
    try {
      const response = await api.post('/items', {
        ...item,
        createdAt: new Date().toISOString()
      });
      dispatch({ type: 'ADD_ITEM', payload: response.data });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <AppContext.Provider value={{ state, fetchItems, addItem }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);