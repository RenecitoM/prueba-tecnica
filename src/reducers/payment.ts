import { Reducer } from 'redux'; 
import * as actionTypes from '../constants/actionTypes';

interface PaymentState {
  transactionStatus: string;
  error: string | null;
}

interface PaymentAction {
  type: string;
  payload?: any;
}

const initialState: PaymentState = {
  transactionStatus: '',
  error: null,
};

const paymentReducer: Reducer<PaymentState, PaymentAction> = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CONFIRM_PAYMENT:
      return {
        ...state,
        error: null,
      };
    case actionTypes.PAYMENT_SUCCESS:
      return {
        ...state,
        transactionStatus: 'Payment successful',
      };
    case actionTypes.PAYMENT_ERROR:
      return {
        ...state,
        transactionStatus: 'Payment failed',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;