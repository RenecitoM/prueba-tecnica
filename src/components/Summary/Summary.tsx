import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateSummary } from '../../constants/actionTypes'; 

const Summary = () => {
  const transactionStatus = useSelector((state: AppStateSummary) => state.payment.transactionStatus);

  return (
    <div>
      <h2>Summary</h2>
      <p>Transaction Status: {transactionStatus}</p>
    </div>
  );
};

export default Summary;