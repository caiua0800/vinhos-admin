import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Componentes/Sidebar';
import Home from './Componentes/Home';
import Estoque from './Componentes/Estoque';
import Pedidos from './Componentes/Pedidos';
import Clientes from './Componentes/Clientes';

function App() {
  const NAV_LINKS = [
    { name: "HOME", path: "/" },
    { name: "ESTOQUE", path: "/estoque" },
    { name: "PEDIDOS", path: "/pedidos" },
    { name: "CLIENTES", path: "/clientes" },  
  ];

  return (
    <Router>
      <div className="App">
        <Sidebar NAV_LINKS={NAV_LINKS} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estoque" element={<Estoque />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
