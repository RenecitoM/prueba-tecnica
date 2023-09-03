import Swal from 'sweetalert2';
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
    const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardPattern = /^5[1-5][0-9]{14}$/;
  
    if (visaPattern.test(cardNumber)) {
      Swal.fire({
        icon: 'success',
        title: 'Tarjeta Visa válida',
        text: 'El formato del número de tarjeta Visa es válido.',
      });
    } else if (mastercardPattern.test(cardNumber)) {
      Swal.fire({
        icon: 'success',
        title: 'Tarjeta MasterCard válida',
        text: 'El formato del número de tarjeta MasterCard es válido.',
      });
    } else {

      Swal.fire({
        icon: 'error',
        title: 'Formato de tarjeta no válido',
        text: 'El formato del número de tarjeta no corresponde a Visa ni MasterCard.',
      });
    }
  
    return {
      type: 'VALIDATE_CREDIT_CARD',
      maskedCardNumber: cardNumber,
    };
  };
