import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL, // json-server roda na porta 3001 por padrão
  timeout: 5000,
});

// Interceptor para tratamento de erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      return Promise.reject({
        message: error.response.data.message || 'Erro na requisição',
        status: error.response.status,
      });
    }
    return Promise.reject({ message: 'Erro de conexão' });
  }
);

export default api;