export const SET_PRODUCT_INFO = 'SET_PRODUCT_INFO';
export const CONFIRM_PAYMENT = 'CONFIRM_PAYMENT';
export const PAYMENT_SUCCESS = 'PAYMENT_SUCCESS';
export const PAYMENT_ERROR = 'PAYMENT_ERROR';

export interface AppState {
    creditCard: {
      cardNumber: string;
    };
  }

  export interface AppStateSummary {
  payment: {
    transactionStatus: string;
  };
}

export interface AppStateFinalStatus {
    finalStatus: {
      transactionResult: string;
    };
  }