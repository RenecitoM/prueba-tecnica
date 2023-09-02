import { combineReducers } from 'redux';
import paymentReducer from './payment';

const rootReducer = combineReducers({
  payment: paymentReducer,
});

export default rootReducer;