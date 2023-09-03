import Swal from 'sweetalert2';

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
