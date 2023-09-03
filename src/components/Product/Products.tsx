import React, { useState } from 'react';
import Navbarstep from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Product from './Product';

const productData1 = {
  name: 'Apple',
  price: 1.99,
  description: "you grow green apples for all public, rich in vitamins",
  urlImg: "https://media.istockphoto.com/id/178395953/es/foto/manzana-verde.jpg?s=612x612&w=0&k=20&c=E5itQ2gQDXYa-3d8QJc-NTJou0d_V4bopSmnMCn6ifc="
};

const productData2 = {
  name: 'Pear',
  price: 2.99,
  description: "you grow green Pear for all public, rich in vitamins",
  urlImg: "https://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/26.jpg"
};

const Products = () => {

  return (
    <div>
      <Product product={productData1}/>
      <Product product={productData2}/>
    </div>
  );
};

export default Products;