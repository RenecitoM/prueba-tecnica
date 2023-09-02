import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { validateCreditCard } from '../../actions/paymentActions';
import { AppState } from '../../constants/actionTypes'; // Asegúrate de que la ruta sea correcta

const Payment = () => {
  const dispatch = useDispatch();
  const creditCard = useSelector((state: AppState) => state.creditCard);
  const [show, setShow] = useState(false);
  const [cardNumber, setCardNumber] = useState('');

  const handlePayment = () => {
    dispatch(validateCreditCard(cardNumber));
  };


  return (
    <div className="payment">
      <Button variant="primary" onClick={() => setShow(true)}>
        Pay with credit card
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Credit Card Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePayment}>
            Pay
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Payment;