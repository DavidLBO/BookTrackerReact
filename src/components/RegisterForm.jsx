// src/components/forms/RegisterForm/RegisterForm.jsx
import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import styles from './RegisterForm.module.css';

const RegisterForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Senhas não coincidem';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FormInput
        label="Nome"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <FormInput
        label="Senha"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />

      <FormInput
        label="Confirmar Senha"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />

      <button type="submit" className={styles.submitButton}>
        Cadastrar
      </button>
    </form>
  );
};

export default RegisterForm;