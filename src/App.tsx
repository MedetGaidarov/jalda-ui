import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductPage/ProductPage';
import OrdersPage from './pages/OrderPage/OrderPage';
import Header from './components/Header/Header';

function App() {

  
  return (
    <Router>
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
       </Routes>
    </div>
    </Router>
  );
}

export default App;
