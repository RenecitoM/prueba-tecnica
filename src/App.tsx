import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Products from './components/Product/Products';
import Payment from './components/Payment/Payment';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Product</Link>
            </li>
            <li>
              <Link to="/payment">Payment</Link>
            </li>
            <li>
              <Link to="/summary">Summary</Link>
            </li>
            <li>
              <Link to="/final-status">Final Status</Link>
            </li>
          </ul>
        </nav>

        <Routes> 
          <Route path="" element={<Products/>} />

          <Route path="payment" element={<Payment onClose={function (): void {
            throw new Error('Function not implemented.');
          } } />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;