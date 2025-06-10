import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const { user } = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Redireciona se já estiver logado
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleRegister = async ({ name, email, password }) => {
    setError(null);
    try {
      const existingUser = await api.get('/users', {
        params: { username: name },
      });
      if (existingUser.data.length > 0) {
        setError('Nome de usuário já está em uso');
        return;
      }

      await api.post('/users', { username: name, password, email });
      navigate('/login');
    } catch (err) {
      setError('Erro ao registrar usuário');
    }
  };

  return (
    <div>
      <h1>Registrar Usuário</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default Register;
