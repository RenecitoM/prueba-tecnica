import React, { useState } from 'react';
import { Button, Modal, Form, Image } from 'react-bootstrap';
import { validateCreditCard } from '../../actions/paymentActions';

interface PaymentProps {
  onClose: () => void;
}

const Payment: React.FC<PaymentProps> = ({ onClose }) => {
  const [cardNumber, setCardNumber] = useState('');

  const handlePayment = () => {
    validateCreditCard( cardNumber );
    onClose();
  };

  return (
    <Modal show={true} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title><b>Enter Credit Card Information</b></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center mt-2 mb-2">
          <Image src={"https://fantactica.mx/wp-content/uploads/2021/04/visa-and-mastercard-logos-logo-visa-png-logo-visa-mastercard-png-visa-logo-white-png-awesome-logos.png"} alt="MasterCard" style={{ width: 'auto', maxHeight: '60px' }} />
        </div>

        <Form>
          <Form.Group controlId="cardNumber">
            <Form.Label><b>Card Number</b></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handlePayment}>
          Pay
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Payment;
