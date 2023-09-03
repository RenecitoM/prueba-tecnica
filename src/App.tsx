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
          </ul>
        </nav>

        <Routes> 
          <Route path="" element={<Products/>} />         
        </Routes>
      </div>
    </Router>
  );
};

export default App;