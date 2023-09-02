import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateFinalStatus } from '../../constants/actionTypes';

const FinalStatus = () => {
  const transactionResult = useSelector((state: AppStateFinalStatus) => state.finalStatus.transactionResult);

  return (
    <div>
      <h2>Final Status</h2>
      <p>Transaction Result: {transactionResult}</p>
    </div>
  );
};

export default FinalStatus;