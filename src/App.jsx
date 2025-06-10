import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppProvider } from './context/AppContext';
import { useAuth, AuthProvider } from './context/AuthContext'; // Importa o AuthProvider e useAuth
import PrivateRoute from './components/PrivateRoute';

import Layout from './components/Layout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import BookPage from './pages/BookPage';

// Componente que repassa o user para o AppProvider
function AppProviders({ children }) {
  const { user } = useAuth();
  return <AppProvider user={user}>{children}</AppProvider>;
}

function App() {
  return (
    <AuthProvider> {/* Primeiro AuthProvider */}
      <AppProviders> {/* Agora o AppProvider recebe user do Auth */}
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/books"
              element={
                <PrivateRoute>
                  <BookPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Layout>
      </AppProviders>
    </AuthProvider>
  );
}

export default App;
