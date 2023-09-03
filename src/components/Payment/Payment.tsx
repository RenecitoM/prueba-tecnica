import React, { useState } from 'react';
import { Button, Modal, Form, Image } from 'react-bootstrap';
import { validateCreditCard } from '../../actions/paymentActions';
import { useSelector } from 'react-redux';

interface PaymentProps {
  onClose: () => void;
}

const Payment: React.FC<PaymentProps> = ({ onClose }) => {
  const [cardNumber, setCardNumber] = useState('');
  const selectedProducts = useSelector((state: any) => state.cart.selectedProducts);

  const handlePayment = () => {
    validateCreditCard(cardNumber);
    onClose();
  };

  return (
    <Modal show={true} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title><b>Enter Credit Card Information</b></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center mt-2 mb-4">
          <Image src={"https://fantactica.mx/wp-content/uploads/2021/04/visa-and-mastercard-logos-logo-visa-png-logo-visa-mastercard-png-visa-logo-white-png-awesome-logos.png"} alt="MasterCard" style={{ width: 'auto', maxHeight: '60px' }} />
        </div>
        {selectedProducts.map((product: any, index: any) => (
          <div key={index} className='card d-inline-block col-5 col-md-2 mx-2 mb-2 text-center' style={{height: "200px"}}>
            <img
              className="card-img-center"
              style={{ objectFit: "cover", maxHeight: "5rem" }}
              src={product.urlImg}
              alt="Card image cap"
            />
            <h4><b>{product.name}</b></h4>
            <p><b>Price: </b>${product.price}</p>
          </div>
        ))}
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
          Pay with credit card
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Payment;
