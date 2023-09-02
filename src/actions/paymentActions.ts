import * as actionTypes from '../constants/actionTypes';
import { Dispatch } from 'redux';

export const setProductInfo = (product: Product) => {
  return {
    type: actionTypes.SET_PRODUCT_INFO,
    product,
  };
};

interface Product {
    id: string;
    name: string;
    price: number;
    description: string,
    urlImg: string
}

  export const confirmPayment = (product: Product) => {
    return {
      type: 'CONFIRM_PAYMENT',
      payload: {
        product: product,
      },
    };
  };

export const paymentSuccess = () => {
  return {
    type: actionTypes.PAYMENT_SUCCESS,
  };
};

export const paymentError = (error : Error) => {
  return {
    type: actionTypes.PAYMENT_ERROR,
    error,
  };
};


export const simulateSuccessfulPayment = () => {
    return (dispatch: Dispatch) => {
      setTimeout(() => {
        dispatch(paymentSuccess());
      }, 2000);
    };
  };
  
  export const simulateFailedPayment = () => {
    return (dispatch: Dispatch) => {
      setTimeout(() => {
        const error = new Error('Payment failed');
        dispatch(paymentError(error));
      }, 2000);
    };
  };

  export const validateCreditCard = (cardNumber: string) => {
    const maskedCardNumber = maskCardNumber(cardNumber);
    return {
      type: 'VALIDATE_CREDIT_CARD',
      maskedCardNumber,
    };
  };
  
  const maskCardNumber = (cardNumber: string) => {
    // Enmascarar el número de tarjeta de crédito
  };