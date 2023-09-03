import React, { useState } from 'react';
import Payment from '../Payment/Payment';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/paymentActions';
import Swal from 'sweetalert2';

interface ProductProps {
  product: {
    name: string;
    price: number;
    description: string;
    urlImg: string;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    Swal.fire({
      icon: 'success',
      title: 'Product added successfully',
    });
  };



  return (
    <>
      <div className="card col-5 col-md-5 col-lg-4 col-xl-2 mt-2 mx-2 d-inline-block">
        <img
          className="card-img-top" style={{ objectFit: "cover", maxHeight: "5rem" }}
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
            ADD
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;