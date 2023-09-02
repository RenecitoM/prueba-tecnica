import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Products from './components/Product/Products';
import Payment from './components/Payment/Payment';
import Summary from './components/Summary/Summary';
import FinalStatus from './components/FinalStatus/FinalStatus';

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

          <Route path="payment" element={<Payment />} />

          <Route path="summary" element={<Summary />} />
          
          <Route path="final-status" element={<FinalStatus />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;