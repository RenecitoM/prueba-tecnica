import React, { useState } from 'react';
import { Button, Modal, Form, Image } from 'react-bootstrap';
import { resetCart, validateCreditCard } from '../../actions/paymentActions';
import { useDispatch, useSelector } from 'react-redux';

interface PaymentProps {
  onClose: () => void;
}

const Payment: React.FC<PaymentProps> = ({ onClose }) => {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [isPayButtonDisabled, setIsPayButtonDisabled] = useState<boolean>(true);
  const dispatch = useDispatch();

  let selectedProducts = useSelector((state: any) => state.cart.selectedProducts);

  const handlePayment = () => {
    validateCreditCard(cardNumber);
    dispatch(resetCart());
    onClose();
  };

  const handleRemoveProduct = (indexToRemove: number) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      index: indexToRemove,
    });
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCardNumber(value);
    setIsPayButtonDisabled(value === '' || selectedProducts.length === 0);
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
        {selectedProducts.length === 0 ? (
          <p>There are no products selected, please choose one to continue</p>
        ) : (
          selectedProducts.map((product: any, index: number) => (
            <div key={index} className='card d-inline-block col-5 col-md-2 mx-2 mb-2 text-center' style={{ height: "200px" }}>
              <img
                className="card-img-center"
                style={{ objectFit: "cover", maxHeight: "5rem" }}
                src={product.urlImg}
                alt="Card image cap"
              />
              <h4><b>{product.name}</b></h4>
              <p><b>Price: </b>${product.price}</p>
              <Button variant="danger" onClick={() => handleRemoveProduct(index)} >
                Remove
              </Button>
            </div>
          ))
        )}
        <Form>
          <Form.Group controlId="cardNumber">
            <Form.Label><b>Card Number</b></Form.Label>
            <Form.Control
              required={true}
              type="text"
              placeholder="Enter card number"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
            <Form.Label className='mt-2 text-muted'>Valid card example <b>5454545454545454</b></Form.Label>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handlePayment} disabled={isPayButtonDisabled}>
          Pay with credit card
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Payment;