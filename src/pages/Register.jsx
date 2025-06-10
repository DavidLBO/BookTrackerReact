// src/pages/Register/Register.jsx
import { useAppContext } from '../context/AppContext';
import RegisterForm from '../components/RegisterForm';
import styles from './Register.module.css';

const Register = () => {
  const { addItem } = useAppContext();

  const handleSubmit = async (formData) => {
    const result = await addItem(formData);
    if (result.success) {
      alert('Cadastro realizado com sucesso!');
    } else {
      alert(`Erro: ${result.error}`);
    }
  };

  return (
    <div className={styles.registerPage}>
      <h1>Cadastro</h1>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Register;