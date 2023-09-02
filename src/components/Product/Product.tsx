import React, { useState } from 'react';
import Navbarstep from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

interface ProductProps {
  product: {
    name: string;
    price: number;
    description: string;
    urlImg: string;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    setSelectedProduct(product);
    navigate('/payment'); 
  };

  return (
      <div className="card col-5 col-md-5 col-lg-4 col-xl-2 mt-2 mx-2 d-inline-block">
        <img
          className="card-img-top" style={{objectFit: "cover", maxHeight: "5rem"}}
          src={product.urlImg}
          alt="Card image cap"
        />
        <div className="card-body text-center">
          <h5 className="card-title" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
            {product.name}
          </h5>
          <p><b>Price: </b>${product.price}</p>
          <p>{product.description.slice(0, 45) + '...'}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
  );
};

export default Product;