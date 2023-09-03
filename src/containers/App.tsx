import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from '../components/Product/Products';
import Payment from '../components/Payment/Payment';
import Navbarstep from '../components/Navbar/Navbar';

const App = () => {

  return (
    <Router>
      <div className="app">
        <Navbarstep></Navbarstep>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/payment" element={<Payment onClose={function (): void {
            throw new Error('Function not implemented.');
          } } />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;