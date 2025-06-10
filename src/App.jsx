import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Register from './pages/Register';
import Items from './pages/Items';

function App() {
  return (
    <AppProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </Layout>
    </AppProvider>
  );
}

export default App;
