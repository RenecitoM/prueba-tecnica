import Swal from 'sweetalert2';

  export const validateCreditCard = (cardNumber) => {
    const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardPattern = /^5[1-5][0-9]{14}$/;
  
    if (visaPattern.test(cardNumber)) {
      Swal.fire({
        icon: 'success',
        title: 'Valid Visa card',
        text: 'Your purchase has been successful.',
      });
    } else if (mastercardPattern.test(cardNumber)) {
      Swal.fire({
        icon: 'success',
        title: 'Valid Visa card',
        text: 'Your purchase has been successful.',
      });
    } else {

      Swal.fire({
        icon: 'error',
        title: 'invalid card format',
        text: 'The card number format does not correspond to Visa or MasterCard.',
      });
    }
  
    return {
      type: 'VALIDATE_CREDIT_CARD',
      maskedCardNumber: cardNumber,
    };
  };

  export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    product,
  });

  export const resetCart = () => {
    return {
      type: 'RESET_CART',
    };
  };
