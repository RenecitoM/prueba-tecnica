import React, { useState } from 'react';
import Navbarstep from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Product from './Product';

const productData1 = {
  name: 'Apple',
  price: 1.99,
  description: "you grow green apples for all public, rich in vitamins",
  urlImg: "https://www.semana.com/resizer/aFlCrqRB5tcLkt-aB8oGfRK9VZQ=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/UM4AUXGP25H6NM6CS7UENR32DQ.jpg"
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