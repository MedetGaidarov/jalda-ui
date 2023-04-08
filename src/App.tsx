import React from 'react';

import './App.css';
import ProductList from './components/ProductList/ProductList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductPage/ProductPage';

function App() {

  
  return (
    <Router>
    <div className="App">
    
        <Routes>
          <Route path="/" element={<ProductsPage />} />
=        </Routes>
    </div>
    </Router>
  );
}

export default App;
