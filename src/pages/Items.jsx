// src/pages/Items/Items.jsx
import ItemList from '../components/ItemList';
import styles from './Items.module.css';

const Items = () => {
  return (
    <div className={styles.itemsPage}>
      <h1>Lista de Itens Cadastrados</h1>
      <ItemList />
    </div>
  );
};

export default Items;