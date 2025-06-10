// src/components/items/ItemCard/ItemCard.jsx
import styles from './ItemCard.module.css';

const ItemCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <h3>{item.name}</h3>
      <p>Email: {item.email}</p>
      <p>ID: {item.id}</p>
      <p>Data de cadastro: {new Date(item.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default ItemCard;