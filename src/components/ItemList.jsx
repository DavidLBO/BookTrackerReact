// src/components/items/ItemList/ItemList.jsx
import { useEffect } from 'react';
import { useAppContext } from '../../../context/AppContext';
import ItemCard from '../ItemCard/ItemCard';
import styles from './ItemList.module.css';

const ItemList = () => {
  const { state, fetchItems } = useAppContext();
  const { items, loading, error } = state;

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  if (loading) return <div className={styles.loading}>Carregando...</div>;
  if (error) return <div className={styles.error}>Erro: {error}</div>;

  return (
    <div className={styles.itemList}>
      {items.length === 0 ? (
        <p className={styles.empty}>Nenhum item cadastrado</p>
      ) : (
        items.map((item) => <ItemCard key={item.id} item={item} />)
      )}
    </div>
  );
};

export default ItemList;